import { Asana } from "../icons/asana";
import { Calendly } from "../icons/caledly";
import { Github } from "../icons/github";
import { Loom } from "../icons/loom";
import { Notion } from "../icons/notion";
import { Postman } from "../icons/postman";

export const GlobalTrust = () => {
  const trusts = [
    { name: "postman", icon: Postman },
    { name: "asana", icon: Asana },
    { name: "github", icon: Github },
    { name: "notion", icon: Notion },
    { name: "calendly", icon: Calendly },
    { name: "loom", icon: Loom },
  ];

  return (
    <div className="layout py-20 xl:py-[6.25rem]">
      <div className="flex w-full flex-col justify-between space-y-12 rounded-[30px] border px-8 py-9 md:flex-row md:space-y-0 lg:px-16 lg:py-[5.5rem]">
        <div className="space-y-5">
          <h2 className="text-5xl font-semibold leading-[120%] tracking-tight">
            Global <span className="text-primary">Trust</span>
          </h2>
          <p className="text-lg leading-[160%] tracking-tight text-black/40 md:text-xl">
            We work with a diverse range of clients across various <br />
            industries, including startups, & large enterprises.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-x-16 gap-y-5 min-[360px]:grid-cols-2 md:grid-cols-3 md:gap-y-12">
          {trusts.map((trust) => (
            <li
              key={trust.name}
              className="flex items-center justify-center rounded-full transition-colors hover:cursor-pointer hover:bg-primary/20"
            >
              <trust.icon />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
