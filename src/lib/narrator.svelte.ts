// Narration: each scene's recorded audio (content/narration/<lesson>/<scene>.ogg), played offline.
// Progress through the text follows the audio's position; the lengths come from durations.json because the
// browser reports these files' duration as Infinity. A scene without audio advances at reading speed.

/** Typical speaking speed at rate 1, for scenes without audio. */
export const CHARS_PER_SECOND = 15;

export class Narration {
  /** Characters of the text spoken so far. */
  progress = $state(0);
  playing = $state(false);
  done = $state(false);
  readonly text: string;
  /** Length at normal speed. */
  readonly seconds: number;
  #audio: HTMLAudioElement | null;
  #rate: number;
  #onend: () => void;
  #timer: ReturnType<typeof setTimeout> | undefined;

  constructor(text: string, options: { audio: { src: string; seconds: number } | null; rate: number; onend: () => void }) {
    this.text = text;
    this.seconds = options.audio?.seconds ?? text.length / CHARS_PER_SECOND;
    this.#rate = options.rate;
    this.#onend = options.onend;
    const audio = options.audio ? new Audio(options.audio.src) : null;
    this.#audio = audio;
    if (!audio) return;
    const seconds = this.seconds;
    audio.playbackRate = options.rate;
    audio.ontimeupdate = () => {
      this.progress = Math.min(text.length, Math.floor((audio.currentTime / seconds) * text.length));
    };
    audio.onended = () => this.#finish();
    audio.onerror = () => this.#withoutAudio();
  }

  play() {
    if (this.done) return;
    this.playing = true;
    if (this.#audio) this.#audio.play().catch(() => this.#withoutAudio());
    else this.#tick();
  }

  pause() {
    this.playing = false;
    this.#audio?.pause();
    clearTimeout(this.#timer);
  }

  /** Stop for good (scene left). */
  stop() {
    this.pause();
  }

  /** Seconds into the narration. */
  get time() {
    return (this.progress / this.text.length) * this.seconds;
  }

  /** Jumps to a position in seconds. */
  seek(seconds: number) {
    const to = Math.max(0, Math.min(this.seconds, seconds));
    this.progress = Math.floor((to / this.seconds) * this.text.length);
    if (this.#audio) this.#audio.currentTime = to;
  }

  setRate(rate: number) {
    this.#rate = rate;
    if (this.#audio) this.#audio.playbackRate = rate;
  }

  #withoutAudio() {
    this.#audio = null;
    if (this.playing) this.#tick();
  }

  #tick() {
    clearTimeout(this.#timer);
    if (!this.playing) return;
    this.progress = Math.min(this.text.length, this.progress + (CHARS_PER_SECOND * this.#rate) / 10);
    if (this.progress >= this.text.length) this.#finish();
    else this.#timer = setTimeout(() => this.#tick(), 100);
  }

  #finish() {
    clearTimeout(this.#timer);
    this.progress = this.text.length;
    this.playing = false;
    this.done = true;
    this.#onend();
  }
}
