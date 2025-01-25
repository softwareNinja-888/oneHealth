export function BulletPoint({ color = "primary", size = "8px" }) {
  return (
    <span
      className={`inline-block rounded-full bg-${color}`}
      style={{  width: size, height: size }}
    ></span>
  );
}
