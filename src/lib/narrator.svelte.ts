// Narration with the Windows voices through the Web Speech API (offline).
// Pausing cancels speech and resuming restarts from the last spoken word: more reliable than
// speechSynthesis.pause() across Windows voices. With no voice installed, captions advance on a timer.

const synth = typeof speechSynthesis === 'undefined' ? null : speechSynthesis;
/** Typical speaking speed at rate 1, used for the no-voice fallback and the safety timeout. */
const CHARS_PER_SECOND = 15;

export const speech = $state<{ voices: string[] }>({ voices: [] });

function loadVoices() {
  speech.voices = (synth?.getVoices() ?? []).filter((v) => v.lang.toLowerCase().startsWith('en')).map((v) => v.name);
}
if (synth) {
  loadVoices();
  synth.addEventListener('voiceschanged', loadVoices);
}

export class Narration {
  /** Characters of the text spoken so far. */
  progress = $state(0);
  playing = $state(false);
  done = $state(false);
  readonly text: string;
  #rate: number;
  #voice: string | null;
  #onend: () => void;
  #token = 0;
  #timer: ReturnType<typeof setTimeout> | undefined;

  constructor(text: string, options: { rate: number; voice: string | null; onend: () => void }) {
    this.text = text;
    this.#rate = options.rate;
    this.#voice = options.voice;
    this.#onend = options.onend;
  }

  play() {
    if (this.done) return;
    this.playing = true;
    this.#speakFrom(this.progress);
  }

  pause() {
    this.playing = false;
    this.#cancel();
  }

  /** Stop for good (scene left). */
  stop() {
    this.playing = false;
    this.#cancel();
  }

  setRate(rate: number) {
    this.#rate = rate;
    if (this.playing) this.#speakFrom(this.progress);
  }

  setVoice(voice: string | null) {
    this.#voice = voice;
    if (this.playing) this.#speakFrom(this.progress);
  }

  #cancel() {
    this.#token++;
    clearTimeout(this.#timer);
    synth?.cancel();
  }

  #speakFrom(index: number) {
    this.#cancel();
    const token = this.#token;
    const rest = this.text.slice(index);
    if (!rest.trim()) return this.#finish(token);
    const english = (synth?.getVoices() ?? []).filter((v) => v.lang.toLowerCase().startsWith('en'));
    const voice = english.find((v) => v.name === this.#voice) ?? english.find((v) => v.default) ?? english[0];
    if (!synth || !voice) return this.#timed(token, index);

    const utterance = new SpeechSynthesisUtterance(rest);
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.rate = this.#rate;
    utterance.onboundary = (e) => {
      if (token === this.#token) this.progress = Math.max(this.progress, index + e.charIndex);
    };
    utterance.onend = () => this.#finish(token);
    utterance.onerror = (e) => {
      if (token === this.#token && e.error !== 'interrupted' && e.error !== 'canceled') this.#timed(token, this.progress);
    };
    synth.speak(utterance);
    // Safety net in case a voice never reports the end.
    this.#timer = setTimeout(() => this.#finish(token), (rest.length / (CHARS_PER_SECOND * this.#rate)) * 2500 + 4000);
  }

  /** Advance at reading speed without audio. */
  #timed(token: number, index: number) {
    const start = performance.now();
    const tick = () => {
      if (token !== this.#token) return;
      const at = index + ((performance.now() - start) / 1000) * CHARS_PER_SECOND * this.#rate;
      this.progress = Math.min(this.text.length, Math.floor(at));
      if (at >= this.text.length) this.#finish(token);
      else this.#timer = setTimeout(tick, 100);
    };
    tick();
  }

  #finish(token: number) {
    if (token !== this.#token) return;
    clearTimeout(this.#timer);
    this.progress = this.text.length;
    this.playing = false;
    this.done = true;
    this.#onend();
  }
}
