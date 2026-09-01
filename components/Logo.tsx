export default function Logo({ size = 48, spinning = true }: { size?: number; spinning?: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={spinning ? "logo-spin" : ""}
    >
      <circle cx="50" cy="50" r="18" fill="#f5f0ff" />
      <ellipse
        cx="50"
        cy="50"
        rx="45"
        ry="12"
        fill="none"
        stroke="#f5f0ff"
        strokeWidth="2.5"
        transform="rotate(-20 50 50)"
      />
    </svg>
  );
}
