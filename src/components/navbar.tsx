import { cn } from "../lib/utils";
import { Hybrid } from "./ui/logo";

const links = ["home", "service", "testimonial", "blog", "contact"];

export const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-screen-2xl justify-between px-[6.25rem] py-12">
      <Hybrid />
      <ul className="flex items-center gap-12 text-xl font-medium leading-[120%] tracking-tight">
        {links.map((link) => (
          <li
            key={link}
            className={cn(
              "border-b-2 border-transparent py-2.5 transition-[color,border-color]",
              "hover:text-primary hover:border-primary",
              link == "home" ? "border-black" : "text-[#121212]/40",
            )}
          >
            <a href={`#link`}>{link[0].toUpperCase() + link.slice(1)}</a>
          </li>
        ))}
      </ul>
      <div className="">
        <button
          onClick={() => alert("Getting Started")}
          className="bg-primary hover:bg-primary/80 rounded-[0.625rem] px-8 py-4 text-lg font-semibold leading-[120%] tracking-tight text-white"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};
