import Image from "next/image";

type LogoProps = {
  className?: string;
} & Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

export function Logo({ className = "h-10 w-auto", ...props }: LogoProps) {
  return (
    <Image
      src="/SADP-logo-white.webp"
      alt="SADP Nepal"
      width={200}
      height={60}
      className={className}
      {...props}
    />
  );
}
