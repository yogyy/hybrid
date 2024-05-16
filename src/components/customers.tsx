import { Avatar } from "./avatar";

const customers = [
  {
    name: "Whisker",
    img: "https://api.dicebear.com/8.x/micah/svg?seed=Whiskers&flip=true&backgroundColor=c0aede,b6e3f4",
  },
  {
    name: "Misty",
    img: "https://api.dicebear.com/8.x/micah/svg?seed=Misty&flip=true&backgroundColor=c0aede,b6e3f4",
  },
  {
    name: "Sheba",
    img: "https://api.dicebear.com/8.x/micah/svg?seed=Sheba&flip=true&backgroundColor=c0aede,b6e3f4",
  },
];

export const Customers = () => {
  return (
    <div className="flex max-w-[25rem] flex-col items-start gap-10">
      <div className="flex gap-3.5">
        <div className="flex -space-x-3">
          {customers.map((customer) => (
            <Avatar
              key={customer.name}
              src={customer.img}
              alt={customer.name}
            />
          ))}
        </div>
        <h2 className="leading-[120%} flex flex-col text-base tracking-tight">
          <span className="text-primary text-[1.75rem] font-semibold leading-[140%]">
            193+
          </span>
          Satisfying Customers
        </h2>
      </div>
      <p className="text-xl leading-[160%] text-black/40">
        Company provides innovative technology solutions to help your business
        grow & succeed. With our expertise and experience, we are committed to
        delivering top-quality products
      </p>
    </div>
  );
};
