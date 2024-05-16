import { cn } from "@/lib/utils";

export const Card = ({
  children,
  className,
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "card relative h-[45rem] w-[557.5px] flex-shrink-0 overflow-hidden rounded-[30px] bg-[#c4c4c4]",
        className,
      )}
    >
      <div className="absolute bottom-0 z-10 m-8 flex gap-6 rounded-[20px] bg-gradient-to-br from-white/40 to-white/10 px-6 py-8">
        {children}
      </div>
    </div>
  );
};
