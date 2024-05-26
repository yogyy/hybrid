import { cn } from "@/lib/utils";
import { useState } from "react";

export const CategorySection = () => {
  const [active, setActive] = useState(0);
  const categories = [
    "Website Design And Development",
    "Mobile App Development",
    "E-Commerce Solution",
    "Digital Marketing Services",
    "IT Consulting And Support",
    "Search Engine Optimitation",
    "Cloud Computing And Hosting",
    "Cybersecurity Services",
  ];

  return (
    <div className="bg-[#f3f3f3] py-14 lg:py-[7.5rem]">
      <div className="layout space-y-8 md:space-y-16">
        <div className="flex flex-col justify-between gap-5 lg:flex-row">
          <div className="flex-shrink-0 space-y-5">
            <div className="btn-section">
              <span>Categories</span>
            </div>
            <h1 className="title-section">
              <span>Transform</span> Ideas Into Reality.
            </h1>
          </div>
          <p className="description md:max-w-[387px]">
            Mi congue risus cras cras. Consequat faucibus eros sit turpis eu
            justo consectetur vestibulum id. Id quam ornare mi id purus
            facilisi. Orci.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-5 rounded-base text-xl font-medium leading-[120%] tracking-tight md:grid-cols-4 lg:text-2xl">
          {categories.map((category, index) => (
            <li
              onClick={() => setActive(index)}
              key={category}
              className={cn(
                "flex w-full items-center justify-center text-balance rounded-base py-8 text-center lg:py-16",
                "cursor-pointer transition-colors",
                active === index
                  ? "bg-primary text-white"
                  : "bg-white/40 text-black/50 hover:bg-primary/40",
              )}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
