export const GetinTouch = () => {
  return (
    <div className="bg-[#2A2C68]/80">
      <div className="layout flex flex-col items-center justify-between gap-10 px-[6.25rem] py-[7.5rem] lg:flex-row">
        <h1
          id="contact"
          className="title-section inline-block text-balance text-5xl text-white"
        >
          Get In Touch With Us For Any Questions, Concerns, or Feedback.
        </h1>
        <button
          type="button"
          className="text min-w-[270px] self-end rounded-[67px] bg-primary px-8 py-5 text-xl font-semibold leading-[120%] tracking-tight text-white focus-within:bg-primary/80 lg:self-center"
        >
          <span className="p-2.5">Learn More</span>
        </button>
      </div>
    </div>
  );
};
