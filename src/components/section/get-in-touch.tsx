export const GetinTouch = () => {
  return (
    <div className="bg-[#2A2C68]/80">
      <div className="layout flex flex-col items-center justify-between gap-10 px-12 py-14 lg:flex-row 2xl:px-[6.25rem] 2xl:py-[7.5rem]">
        <h1
          id="contact"
          className="title-section inline-block text-balance text-2xl text-white md:text-3xl lg:text-5xl"
        >
          Get In Touch With Us For Any Questions, Concerns, or Feedback.
        </h1>
        <button
          type="button"
          className="text self-end rounded-[67px] bg-primary px-6 py-3 text-lg font-semibold leading-[120%] tracking-tight text-white focus-within:bg-primary/80 md:px-8 md:py-5 lg:min-w-[270px] lg:self-center lg:text-xl"
        >
          <span className="p-2.5">Learn More</span>
        </button>
      </div>
    </div>
  );
};
