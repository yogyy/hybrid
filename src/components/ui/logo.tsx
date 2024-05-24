import Logo from "@/assets/logo.svg";

export function Hybrid() {
  return (
    <a href="/" className="flex w-fit items-center gap-1.5">
      <img src={Logo} alt="hybrid logo" draggable={false} />
      <span className="text-[28px] font-semibold leading-[120%] tracking-tight">
        Hybrid
      </span>
    </a>
  );
}
