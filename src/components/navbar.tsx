import { cn } from "../lib/utils";
import { Hybrid } from "./ui/logo";

const links = ["home", "service", "testimonial", "blog", "contact"];

export const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-screen-2xl justify-between px-5 py-5 md:px-12 lg:py-12 xl:px-[6.25rem]">
      <Hybrid />
      <ul className="hidden items-center gap-6 text-base font-medium leading-[120%] tracking-tight md:flex lg:gap-12 lg:text-xl">
        {links.map((link) => (
          <li
            key={link}
            className={cn(
              "border-b-2 border-transparent py-2.5 transition-[color,border-color]",
              "hover:border-primary hover:text-primary",
              link == "home" ? "border-black" : "text-[#121212]/40",
            )}
          >
            <a href={`#${link}`}>{link[0].toUpperCase() + link.slice(1)}</a>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => alert("Getting Started")}
          className="scale-75 rounded-base bg-primary px-8 py-4 text-lg font-semibold leading-[120%] tracking-tight text-white hover:bg-primary/80 lg:scale-100"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};
