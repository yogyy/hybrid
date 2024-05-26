export const BlogSection = () => {
  const news = [
    "Company has been Named One of the Top 10 Technology Cohmpanies to Watch by Forbes Magazine",
    "CEO will Be Speaking At the Upcoming Technology Innovation Conference On The Topic of Digital Transformation",
  ];
  return (
    <div className="layout space-y-[74px] pb-[120px] pt-[200px]">
      <div className="flex flex-col items-center justify-center gap-8">
        <div id="blog" className="btn-section scroll-m-10">
          <span>News and Update</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="title-section">
            Unleashing the Power of <span>Technology</span>
          </h1>
          <p className="mt-5 max-w-[685px] text-balance text-center leading-[160%] tracking-tight text-black/60">
            Stay up-to-date with the latest news and updates from our company,
            including new products and services, industry trends, and upcoming
            events
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-x-5 lg:flex-row">
        {news.map((blog, i) => (
          <div key={i} className="group w-auto max-w-[610px] flex-1 space-y-8">
            <div className="aspect-video w-full rounded-[20px] bg-[#c4c4c4] xl:h-[400px]"></div>
            <div className="space-y-5">
              <p className="text-xl font-medium leading-[140%] tracking-tight text-black md:text-2xl lg:text-[28px]">
                {blog}
              </p>
              <p className="text-base leading-[160%] tracking-tight text-black/40 md:text-lg">
                <span className="font-semibold text-primary">2 Mar 2023</span>,
                by Author
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
