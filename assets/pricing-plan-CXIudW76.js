import{r as n,j as e,c as a,s as c,m as l,a as o,b as d}from"./index-BhMrkCu0.js";const u=()=>{const[t,r]=n.useState(1);return e.jsx("div",{style:{backgroundColor:"#fafafa"},children:e.jsxs("div",{className:"layout flex flex-col gap-9 py-[5.5rem] lg:gap-[74px]",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-8",children:[e.jsx("div",{className:"btn-section scroll-mb-10",children:e.jsx("span",{children:"Pricing Plan"})}),e.jsxs("div",{className:"space-y-5 text-center",children:[e.jsxs("h1",{className:"title-section w-full flex-shrink-0 lg:text-5xl",children:["Solution for ",e.jsx("span",{children:"Digital"})," World"]}),e.jsx("p",{className:"description text-balance",children:"We offer transparent and competitive pricing for all of our technology solutions, so you can make an informed decision based on your budget and business needs."})]})]}),e.jsx("ul",{className:"flex flex-wrap justify-around gap-5",children:p.map((s,i)=>e.jsxs("li",{className:a("group flex flex-col justify-between gap-12 rounded-[20px] p-6 pt-10 focus-within:bg-[#EAEAF8] lg:p-8 lg:pt-14",t==i?"bg-[#EAEAF8]":"bg-white","max-w-[295px]"),children:[e.jsx("div",{className:"flex h-24 w-24 scale-75 items-center justify-center rounded-[20px] bg-primary/5 p-4 lg:scale-100",children:e.jsx("img",{src:s.icon,alt:s.title,draggable:!1})}),e.jsx("h2",{className:"text-2xl font-semibold lg:text-[32px]",children:s.title}),e.jsxs("div",{className:"space-y-8",children:[e.jsx("p",{className:"description text-base",children:s.description}),e.jsx("p",{className:a("text-3xl font-semibold leading-[120%] tracking-tighter lg:text-7xl",t==i?"text-primary":"text-black"),children:`$${s.price}`})]}),e.jsx("button",{type:"button",onClick:()=>r(i),className:a("w-full rounded-[67px] border-2 px-6 py-3 text-base leading-[120%] tracking-tight lg:px-8 lg:py-5 lg:text-xl",t==i?"border-primary bg-primary text-white focus-within:outline-white":"border-black/30 bg-transparent text-black/30 focus-within:text-primary focus-within:outline-primary group-hover:border-primary group-hover:text-primary"),children:"Learn More"})]},s.price))})]})})},p=[{icon:c,title:"Cybersecurity Services",description:"This package includes an assessment of your current security systems, recommend for improvements, implement of security measures",price:60},{icon:l,title:"Cloud and Hosting",description:"This package includes cloud computing and hosting services, data backup and recovery, 24/7 support, and security features to protect your data.",price:120},{icon:o,title:"Website Package",description:"This package includes a basic website design and development, up to 5 pages, basic search engine optimization, and 1 round of revisions.",price:240},{icon:d,title:"Mobile App Development",description:"This package includes mobile app design and development for iOS and/or Android, basic testing and quality assurance, and up to 3 rounds of revisions.",price:360}];export{u as PricingPlan};