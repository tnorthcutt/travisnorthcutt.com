const MAX_LENGTH = 155;

/**
 * Build a plain-text summary from raw Markdown/MDX body content, for use as a
 * meta description when a post has no explicit `description` in frontmatter.
 */
export function excerpt(body?: string, maxLength = MAX_LENGTH): string {
  if (!body) return "";

  const text = body
    // MDX import statements and JSX components (e.g. <Tweet id="..." />).
    .replace(/^import\s.+$/gm, "")
    .replace(/<\/?[A-Za-z][^>]*>/g, " ")
    // Fenced and inline code.
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]*)`/g, "$1")
    // Images before links, so image alt text doesn't survive as prose.
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    // Headings, blockquotes, list bullets and horizontal rules.
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/^\s{0,3}>\s?/gm, "")
    .replace(/^\s{0,3}([-*+]|\d+\.)\s+/gm, "")
    .replace(/^\s{0,3}([-*_])\s*(\1\s*){2,}$/gm, " ")
    // Emphasis markers.
    .replace(/(\*\*|__|\*|_|~~)/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;

  // Truncate on a word boundary rather than mid-word.
  const clipped = text.slice(0, maxLength);
  const lastSpace = clipped.lastIndexOf(" ");
  const truncated = lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped;

  return `${truncated.replace(/[.,;:!?—–-]+$/, "")}…`;
}
