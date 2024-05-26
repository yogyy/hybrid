import monitor from "@/assets/monitor.svg";
import computer from "@/assets/computer.svg";
import mobile from "@/assets/mobile-phone.svg";
import shield from "@/assets/shield.svg";

export const Service = () => {
  const services = [
    {
      img: computer,
      name: "Website Design and Development",
      description:
        "Expert web designers and developers can create a custom website that aligns with your brand and business goals.",
    },
    {
      img: mobile,
      name: "Mobile App Development",
      description:
        "Specialize in creating mobile apps that are innovative, intuitive, and tailored to meet the unique needs of your business.",
    },
    {
      img: monitor,
      name: "Data Analytics  & Integration",
      description:
        "Cloud computing and hosting services that help businesses store and access data securely and reliably. ",
    },
    {
      img: shield,
      name: "Cybersecurity Services",
      description:
        "Cybersecurity services to help businesses protect against cyber threats such as malware, ransomware, and data breaches",
    },
  ];

  return (
    <div className="mx-auto flex max-w-screen-2xl flex-col items-center gap-10 px-5 pt-[10rem] md:px-12 lg:gap-[74px] 2xl:px-[6.25rem]">
      <div className="flex flex-col items-center gap-8">
        <div id="service" className="btn-section scroll-m-10">
          <span>Service</span>
        </div>
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="title-section">
            Simplify Life With <span>Technology</span>
          </h1>
          <p className="text-lg leading-[160%] tracking-tight text-black/40 md:text-xl">
            We offer a wide range of technology solutions to help businesses{" "}
            <br />
            of all sizes and industries achieve their goals
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li
            key={service.name}
            className="flex max-w-[295px] flex-col items-center justify-between gap-8"
          >
            <div className="flex h-[8.25rem] w-[8.25rem] justify-center rounded-[2.5rem] bg-primary/5 p-4">
              <img src={service.img} alt={service.name} />
            </div>
            <div className="space-y-5">
              <p className="px-4 text-center text-xl font-medium leading-[120%] tracking-tight md:text-[1.75rem]">
                {service.name}
              </p>
              <p className="px-5 text-center text-sm leading-[160%] tracking-tight text-black/40">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
