import { LogoMark } from "./LogoMark";
import { LogoWordmark } from "./LogoWordmark";

export function Logo({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoMark size={size} color="#8B1A2B" />
      <LogoWordmark />
    </div>
  );
}
