export function BulletPoint({ color = "black", size = "8px" }) {
  return (
    <span
      className="inline-block rounded-full"
      style={{ backgroundColor: color, width: size, height: size }}
    ></span>
  );
}
