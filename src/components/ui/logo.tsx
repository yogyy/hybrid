import hybrid from "/logo.svg";

export function Hybrid() {
  return (
    <a
      href="/"
      className="flex w-fit scale-75 items-center gap-1.5 lg:scale-100"
    >
      <img src={hybrid} alt="logo" draggable={false} />
      <span className="text-[28px] font-semibold leading-[120%] tracking-tight">
        Hybrid
      </span>
    </a>
  );
}
