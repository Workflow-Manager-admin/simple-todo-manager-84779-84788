/**
 * All SVG icons used in buttons and navigation - visually consistent with design/Figma.
 */

export const CheckIcon = ({ filled }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill={filled ? "var(--color-34c759)" : "none"}
    stroke="var(--color-34c759)"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block" }}
  >
    <circle cx="12" cy="12" r="10" fill={filled ? "var(--color-34c759)" : "none"} />
    {filled ? (
      <polyline
        points="8 13 11 16 16 9"
        stroke="#fff"
        strokeWidth="2.5"
        fill="none"
      />
    ) : (
      <polyline
        points="8 13 11 16 16 9"
        stroke="var(--color-34c759)"
        strokeWidth="2.5"
        fill="none"
      />
    )}
  </svg>
);

export const PencilIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-9395d3)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block" }}
  >
    <path d="M12 20h9" stroke="var(--color-8b8787)" />
    <path d="M7.07 18.28a2.4 2.4 0 0 1-.69-1.2l-1.07-4.28a2.4 2.4 0 0 1 0-1 2.4 2.4 0 0 1 .69-1.21l7.08-7.09a2.4 2.4 0 0 1 3.41 0l1.41 1.41a2.4 2.4 0 0 1 0 3.41l-7.08 7.08a2.4 2.4 0 0 1-1.21.68l-4.29 1.09.06-.08z"/>
  </svg>
);

export const TrashIcon = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-9395d3)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: "block" }}
  >
    <rect x="3" y="6" width="18" height="15" rx="2" stroke="var(--color-8b8787)" />
    <path d="M8 10v6M12 10v6M16 10v6" />
    <path d="M5 6l1-3h12l1 3" />
    <path d="M9 3v3h6V3" />
  </svg>
);

export const PlaylistIcon = ({ active }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
       stroke={active ? "var(--color-9395d3)" : "var(--color-8b8787)"}
       strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="5" width="16" height="2" rx="1"/>
    <rect x="4" y="11" width="16" height="2" rx="1"/>
    <rect x="4" y="17" width="10" height="2" rx="1"/>
  </svg>
);

export const TickIcon = ({ active }) => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none"
    stroke={active ? "var(--color-9395d3)" : "var(--color-8b8787)"}
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" stroke={active ? "var(--color-9395d3)" : "var(--color-8b8787)"} fill="none"/>
    <polyline points="8 13 11 16 16 9" />
  </svg>
);
