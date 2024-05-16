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
    <div className="layout flex items-center gap-20 py-60">
      <div className="space-y-8">
        <div className="btn-section">
          <span>Why Choose Us</span>
        </div>
        <div className="space-y-12">
          <div className="space-y-5">
            <h1 className="text-balance text-[3.5rem] font-semibold leading-[120%] tracking-tight">
              Connecting <span className="text-primary">Technology</span> &
              People
            </h1>
            <p className="description">
              There are many technology companies out there, but we believe
              we're the best choice for your business.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-8">
            {whyus.map((bcz) => (
              <li key={bcz.title} className="space-y-[15px]">
                <div className="rounded-base w-fit bg-primary p-1.5">
                  <Checkmark />
                </div>
                <div className="space-y-3">
                  <p className="text-[22px] font-medium leading-[120%] tracking-tight">
                    {bcz.title}
                  </p>
                  <p className="description text-sm">{bcz.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Card>
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 p-2.5">
            <img
              src={shield}
              alt="security"
              className="rounded-base h-[40px] bg-primary p-2"
            />
            <h2 className="text-2xl font-medium leading-[120%] tracking-tight text-white">
              Secure Browsing
            </h2>
          </div>
          <p className="description text-sm text-white/60">
            We'll meet with you to discuss your needs and goals and recommend
            the best solution for your business.
          </p>
        </div>
      </Card>
    </div>
  );
};
