type BrandMarkProps = {
  size?: "small" | "large" | "display";
  inverse?: boolean;
};

export function BrandMark({
  size = "small",
  inverse = false,
}: BrandMarkProps) {
  return (
    <span
      className={`brand-mark brand-mark-${size}${inverse ? " brand-mark-inverse" : ""}`}
      aria-hidden="true"
    >
      <img className="brand-mark-image" src="/rixa-logo.png" alt="" />
    </span>
  );
}
