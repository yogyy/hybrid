import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}
export const Avatar = ({ alt, src, className }: AvatarProps) => {
  return (
    <div
      className={cn("h-16 w-16 overflow-hidden rounded-full", className)}
      style={{ backgroundColor: "#C4C4C4" }}
    >
      <img src={src} alt={alt} draggable={false} />
    </div>
  );
};
