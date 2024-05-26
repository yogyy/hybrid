import { Avatar } from "../avatar";

export const Testimonial = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className="layout flex flex-col py-[120px] md:flex-row lg:gap-[208px]">
        <div className="w-full space-y-5">
          <div id="testimonial" className="btn-section scroll-mb-10">
            <span>Testimonial</span>
          </div>
          <h1 className="title-section w-full flex-shrink-0 lg:text-5xl">
            What They <span>Said</span>
          </h1>
        </div>
        <div className="relative max-w-[715px] space-y-16">
          <p className="text-xl leading-[160%] tracking-tight text-black/40 lg:text-[32px]">
            “The team at Your Trusted Technology Partner was amazing to work
            with. They listened to our needs and created a custom solution that
            exceeded our expectations”
          </p>
          <div className="flex items-center gap-6">
            <Avatar
              alt="Jerry Helfer"
              src="https://api.dicebear.com/8.x/micah/svg?seed=Sheba&flip=true&backgroundColor=c0aede,b6e3f4"
              className="h-[70px] w-[70px] scale-75 lg:scale-100"
            />
            <div>
              <p className="text-xl font-semibold text-black lg:text-[32px]">
                Jerry Helfer
              </p>
              <p className="text-base text-black/60 lg:text-xl">
                Rhodes Furniture
              </p>
            </div>
            <svg
              width="70"
              height="56"
              viewBox="0 0 70 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-auto scale-75 md:scale-90 lg:scale-100"
            >
              <path
                d="M38.8889 49.3376L51.5504 25.7492L58.9664 23.5884C58.2429 25.269 57.3385 26.6495 56.2532 27.7299C55.168 28.6903 53.9018 29.1704 52.4548 29.1704C49.3196 29.1704 46.4255 27.91 43.7726 25.3891C41.1197 22.7481 39.7933 19.4469 39.7933 15.4855C39.7933 11.164 41.2403 7.50268 44.1344 4.50161C47.149 1.50054 50.7666 0 54.9871 0C58.9664 0 62.4634 1.50054 65.478 4.50161C68.4927 7.50268 70 11.164 70 15.4855C70 17.1661 69.6382 19.2069 68.9147 21.6077C68.3118 23.8885 67.0457 26.8296 65.1163 30.4309L51.0078 56L38.8889 49.3376ZM0 49.3376L12.6615 25.7492L20.2584 23.5884C19.4143 25.269 18.4496 26.6495 17.3643 27.7299C16.2791 28.6903 15.0129 29.1704 13.5659 29.1704C10.4307 29.1704 7.53661 27.91 4.88372 25.3891C2.35142 22.7481 1.08527 19.4469 1.08527 15.4855C1.08527 11.164 2.5323 7.50268 5.42636 4.50161C8.32041 1.50054 11.8777 0 16.0982 0C20.1981 0 23.7554 1.50054 26.77 4.50161C29.7847 7.50268 31.292 11.164 31.292 15.4855C31.292 17.1661 30.9302 19.2069 30.2067 21.6077C29.4832 23.8885 28.1568 26.8296 26.2274 30.4309L12.2997 56L0 49.3376Z"
                fill="#4D52D9"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
