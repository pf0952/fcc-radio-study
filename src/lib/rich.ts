/** HTML for pool text: everything escaped except the <sub>/<sup> markup the pools use. */
export function rich(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&lt;(\/?)(sub|sup)&gt;/g, '<$1$2>');
}

/** Pool text without markup, for search and accessible labels. */
export const plain = (text: string) => text.replace(/<\/?(sub|sup)>/g, '');
