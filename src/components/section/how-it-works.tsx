import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card } from "../card";
import { ChevronRight } from "../icons/chevron-right";

export const HiW = () => {
  const [active, setActive] = useState("Consultation");
  const works = ["Consultation", "Design & Development", "Planning", "Testing"];

  return (
    <div className="layout flex flex-col gap-10 md:flex-row lg:gap-20">
      <Card className="w-full self-center">
        <div className="h-fit rounded-base bg-gradient-to-b from-primary to-[#6B70E0] p-1.5">
          <div className="flex h-6 w-6 items-center justify-center text-base font-semibold text-white md:text-lg">
            {works.indexOf(active) + 1}
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg leading-[120%] tracking-tight text-white md:text-xl">
            {active}
          </h1>
          <p className="text-sm leading-[160%] tracking-tight text-white/60 md:text-base">
            We'll meet with you to discuss your needs and goals and recommend
            the best solution for your business.
          </p>
        </div>
      </Card>

      <div className="max-w-[42.5rem] flex-shrink space-y-8 px-4 md:px-0">
        <div className="btn-section">
          <span>How It Works</span>
        </div>

        <div className="space-y-5">
          <h1 className="title-section">
            <span>Innovation</span> that Drives Maximum Results
          </h1>
          <p className="description">
            Our process is designed to be simple and straightforward, so you can
            focus on running your business while we take care of the technology
          </p>
        </div>

        <ul className="space-y-3">
          {works.map((work) => (
            <li key={work}>
              <button
                onClick={() => setActive(work)}
                className={cn(
                  "w-full rounded-base p-4 text-left text-lg font-semibold leading-[120%] tracking-tight lg:p-6 lg:text-xl",
                  "flex items-center justify-between",
                  active === work
                    ? "bg-primary text-white"
                    : "bg-[#f4f4f4] text-black/40",
                )}
              >
                {work}
                <ChevronRight
                  className={cn(
                    active === work ? "stroke-white" : "stroke-black/20",
                  )}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
