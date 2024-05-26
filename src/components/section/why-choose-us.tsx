import { Card } from "../card";
import { Checkmark } from "../icons/checkmark";
import shield from "@/assets/shield.svg";

export const WCU = () => {
  const whyus = [
    {
      title: "Experienced",
      description:
        "Team has years of experience and expertise in the technology industry, and we're always up-to-date on the latest trends and best practices.",
    },
    {
      title: "Customer Focused",
      description:
        "Committed to providing exceptional customer service and support, and we'll work closely with you to ensure your needs are met every step of the way.",
    },
    {
      title: "Quality & Reliability",
      description:
        "Pride ourselves on delivering top-quality products and services that are reliable, secure, and scalable.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Offer competitive pricing without compromising on quality or service, so you can get the best value for your investment.",
    },
  ];

  return (
    <div className="layout flex flex-col items-center gap-10 py-20 lg:flex-row xl:flex-row xl:gap-20 2xl:py-60">
      <div className="space-y-8">
        <div className="btn-section">
          <span>Why Choose Us</span>
        </div>
        <div className="space-y-12">
          <div className="space-y-5">
            <h1 className="title-section text-balance">
              Connecting <span>Technology</span> & People
            </h1>
            <p className="description">
              There are many technology companies out there, but we believe
              we're the best choice for your business.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-8">
            {whyus.map((bcz) => (
              <li key={bcz.title} className="space-y-[15px]">
                <div className="w-fit scale-75 rounded-base bg-primary p-1.5 md:scale-100">
                  <Checkmark />
                </div>
                <div className="space-y-3">
                  <p className="text-xl font-medium leading-[120%] tracking-tight md:text-[22px]">
                    {bcz.title}
                  </p>
                  <p className="description text-sm">{bcz.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Card className="w-full self-center">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="flex flex-shrink-0 items-center gap-3 p-2.5 lg:block">
            <img
              src={shield}
              alt="security"
              className="h-10 rounded-base bg-primary p-2"
            />
            <h2 className="text-xl font-medium leading-[120%] tracking-tight text-white md:text-2xl">
              Secure Browsing
            </h2>
          </div>
          <p className="description text-center text-sm text-white/60 md:text-left">
            We'll meet with you to discuss your needs and goals and recommend
            the best solution for your business.
          </p>
        </div>
      </Card>
    </div>
  );
};
