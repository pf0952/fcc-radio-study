/**
 * Scales an HTML template down (to 70% at most) when its content runs past the bottom of the stage.
 * The content is laid out in a box 1/scale as large and then scaled, so it still fills the stage width.
 */
export function fitToStage(stage: HTMLElement) {
  const content = stage.firstElementChild as HTMLElement | null;
  if (!content || content.scrollHeight <= stage.clientHeight + 1) return;
  const scale = Math.max(0.7, stage.clientHeight / content.scrollHeight);
  Object.assign(content.style, {
    right: 'auto',
    bottom: 'auto',
    width: `${100 / scale}%`,
    height: `${100 / scale}%`,
    transform: `scale(${scale})`,
    transformOrigin: '0 0',
  });
}

/** Svelte action: shrinks an element's font size (to 70% at most) until its text fits inside its padding. */
export function shrinkToFit(el: HTMLElement) {
  const style = getComputedStyle(el);
  const base = parseFloat(style.fontSize);
  const text = document.createRange();
  text.selectNodeContents(el);
  const overflows = () => {
    const box = el.getBoundingClientRect();
    const k = box.width / el.offsetWidth; // SVG scaling between CSS pixels and the screen
    const t = text.getBoundingClientRect();
    return (
      t.top < box.top + parseFloat(style.paddingTop) * k - 1 ||
      t.bottom > box.bottom - parseFloat(style.paddingBottom) * k + 1 ||
      t.left < box.left + parseFloat(style.paddingLeft) * k - 1 ||
      t.right > box.right - parseFloat(style.paddingRight) * k + 1
    );
  };
  for (let scale = 0.95; scale >= 0.7 && overflows(); scale -= 0.05) el.style.fontSize = `${base * scale}px`;
}
