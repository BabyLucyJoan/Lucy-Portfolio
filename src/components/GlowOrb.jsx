export default function GlowOrb({ color, size = 300, top, bottom, left, right, delay = '0s' }) {
  return (
    <div
      className="orb"
      style={{
        width: size, height: size,
        background: color,
        top, bottom, left, right,
        animationDelay: delay,
      }}
    />
  );
}
