import { cn } from "@/lib/utils";

export const Card = ({
  children,
  className,
}: React.ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "card relative aspect-[3/4] h-fit max-w-[557.5px] flex-shrink-0 overflow-hidden rounded-[30px] bg-[#c4c4c4] md:w-1/2 2xl:h-[45rem]",
        className,
      )}
    >
      <div className="absolute bottom-0 z-10 m-4 flex gap-3 rounded-[20px] bg-gradient-to-br from-white/40 to-white/10 px-3 py-4 md:m-8 md:gap-6 md:px-6 md:py-8">
        {children}
      </div>
    </div>
  );
};
