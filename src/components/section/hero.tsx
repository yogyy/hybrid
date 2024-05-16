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
      <div
        style={{ backgroundColor: "#c4c4c4", height: "698px" }}
        className="relative flex items-end justify-center"
      >
        {/* <img
          src=""
          alt="YOUR IMAGE HERE"
          className="absolute h-[51.25rem] w-[76.25rem] bg-[#c4c4c4]"
        /> */}
        <div className="text-primary absolute grid h-[51.25rem] w-[76.25rem] place-content-center bg-[#c4c4c4] text-[3.25rem]">
          YOUR HERO IMAGE HERE
        </div>
      </div>
    </>
  );
};
