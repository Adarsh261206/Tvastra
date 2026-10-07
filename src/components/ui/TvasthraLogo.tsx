interface TvasthraLogoProps {
  className?: string;
  size?: number;
  loading?: 'eager' | 'lazy';
}

export default function TvasthraLogo({ className = '', size = 200, loading = 'eager' }: TvasthraLogoProps) {
  return (
    <img
      src="/logo.png"
      alt="TVASTRA — Wings to your Creativity"
      width={size}
      height={size}
      loading={loading}
      decoding="async"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
