import { Customers } from "../customers";

export const HeroSection = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fafafa" }} className="pb-10">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between p-[6.25rem]">
          <h1 className="max-w-[715px] flex-1 text-[6.25rem] font-semibold leading-[120%] tracking-tight">
            Empowering Your <span className="text-primary">Digital</span> future
          </h1>
          <Customers />
        </div>
      </div>
      <div className="relative flex items-end justify-center 2xl:h-[698px]">
        <img
          src="https://pbs.twimg.com/media/GOTM-mAbYAAvOHh?format=webp&name=large"
          alt="YOUR IMAGE HERE"
          className="w-full 2xl:absolute 2xl:h-[51.25rem] 2xl:w-[76.25rem] 2xl:text-[3.25rem]"
        />
        {/* <div className="grid aspect-video w-full place-content-center bg-[#c4c4c4] text-2xl text-primary 2xl:absolute 2xl:h-[51.25rem]  2xl:w-[76.25rem] 2xl:text-[3.25rem]">
          YOUR HERO IMAGE HERE
        </div> //replace this with your image */}
      </div>
    </>
  );
};
