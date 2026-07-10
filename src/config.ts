// Shared constants used by both the Astro frontmatter (build-time) and the
// client <script> of ProjectsListPage. Single source of truth so pagination
// stays in sync across the server/client boundary.

/** Number of project cards shown per page in the projects list. */
export const PER_PAGE = 5;

/** Zero-pad a number to two digits, e.g. 3 -> "03". */
export const pad = (n: number) => String(n).padStart(2, '0');
