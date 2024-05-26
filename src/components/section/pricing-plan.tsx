import { useState } from "react";
import monitor from "@/assets/monitor.svg";
import computer from "@/assets/computer.svg";
import mobile from "@/assets/mobile-phone.svg";
import shield from "@/assets/shield.svg";
import { cn } from "@/lib/utils";

export const PricingPlan = () => {
  const [active, setActive] = useState(1);

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div className="layout flex flex-col gap-9 py-[5.5rem] lg:gap-[74px]">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="btn-section scroll-mb-10">
            <span>Pricing Plan</span>
          </div>
          <div className="space-y-5 text-center">
            <h1 className="title-section w-full flex-shrink-0 lg:text-5xl">
              Solution for <span>Digital</span> World
            </h1>
            <p className="description text-balance">
              We offer transparent and competitive pricing for all of our
              technology solutions, so you can make an informed decision based
              on your budget and business needs.
            </p>
          </div>
        </div>
        <ul className="flex flex-wrap justify-around gap-5">
          {packages.map((pkg, i) => (
            <li
              key={pkg.price}
              className={cn(
                "group flex flex-col justify-between gap-12 rounded-[20px] p-6 pt-10 focus-within:bg-[#EAEAF8] lg:p-8 lg:pt-14",
                active == i ? "bg-[#EAEAF8]" : "bg-white",
                "max-w-[295px]",
              )}
            >
              <div className="flex h-24 w-24 scale-75 items-center justify-center rounded-[20px] bg-primary/5 p-4 lg:scale-100">
                <img src={pkg.icon} alt={pkg.title} draggable={false} />
              </div>
              <h2 className="text-2xl font-semibold lg:text-[32px]">
                {pkg.title}
              </h2>
              <div className="space-y-8">
                <p className="description text-base">{pkg.description}</p>
                <p
                  className={cn(
                    "text-3xl font-semibold leading-[120%] tracking-tighter lg:text-7xl",
                    active == i ? "text-primary" : "text-black",
                  )}
                >{`$${pkg.price}`}</p>
              </div>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "w-full rounded-[67px] border-2 px-6 py-3 text-base leading-[120%] tracking-tight lg:px-8 lg:py-5 lg:text-xl",
                  active == i
                    ? "border-primary bg-primary text-white focus-within:outline-white"
                    : "border-black/30 bg-transparent text-black/30 focus-within:text-primary focus-within:outline-primary group-hover:border-primary group-hover:text-primary",
                )}
              >
                Learn More
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const packages = [
  {
    icon: shield,
    title: "Cybersecurity Services",
    description:
      "This package includes an assessment of your current security systems, recommend for improvements, implement of security measures",
    price: 60,
  },
  {
    icon: monitor,
    title: "Cloud and Hosting",
    description:
      "This package includes cloud computing and hosting services, data backup and recovery, 24/7 support, and security features to protect your data.",
    price: 120,
  },
  {
    icon: computer,
    title: "Website Package",
    description:
      "This package includes a basic website design and development, up to 5 pages, basic search engine optimization, and 1 round of revisions.",
    price: 240,
  },
  {
    icon: mobile,
    title: "Mobile App Development",
    description:
      "This package includes mobile app design and development for iOS and/or Android, basic testing and quality assurance, and up to 3 rounds of revisions.",
    price: 360,
  },
];
