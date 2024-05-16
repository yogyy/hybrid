import { Asana } from "../icons/asana";
import { Calendly } from "../icons/caledly";
import { Github } from "../icons/github";
import { Loom } from "../icons/loom";
import { Notion } from "../icons/notion";
import { Postman } from "../icons/postman";

export const GlobalTrust = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-[6.25rem] py-[12.5rem]">
      <div className="flex w-full flex-col justify-between rounded-[30px] border px-16 py-[5.5rem] md:flex-row">
        <div className="space-y-5">
          <h2 className="text-5xl font-semibold leading-[120%] tracking-tight">
            Global <span className="text-primary">Trust</span>
          </h2>
          <p className="text-xl leading-[160%] tracking-tight text-black/40">
            We work with a diverse range of clients across various <br />
            industries, including startups, & large enterprises.
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-x-16 md:grid-cols-3 md:gap-y-12">
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

const trusts = [
  { name: "postman", icon: Postman },
  { name: "asana", icon: Asana },
  { name: "github", icon: Github },
  { name: "notion", icon: Notion },
  { name: "calendly", icon: Calendly },
  { name: "loom", icon: Loom },
];
