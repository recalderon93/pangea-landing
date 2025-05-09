import service1IMG from "@/public/service-1.png";
import service2IMG from "@/public/service-2.jpeg";
import service3IMG from "@/public/service-3.jpeg";
import service4IMG from "@/public/service-4.png";

const servicesItems = [
  {
    id: "service-1",
    title: "Agile Project Management",
    description:
      "Transparent, collaborative, and results-driven Agile management for your startup's success.",
    image: service1IMG,
    href: "/services/agile-project-management",
  },
  {
    id: "service-2",
    title: "Web Development",
    description:
      "Transparent, collaborative, and results-driven Agile management for your startup's success.",
    image: service2IMG,
    href: "/services/web-development",
  },
  {
    id: "service-3",
    title: "Apps Development",
    description:
      "We analyze your business model in detail, and develop the ideal application you need.",
    image: service3IMG,
    href: "/services/apps-development",
  },
  {
    id: "service-4",
    title: "UX & UI Design",
    description:
      "We will create intuitive and engaging digital experiences that will captivate all your users.",
    image: service4IMG,
    href: "/services/ux-ui-design",
  },
];

export default servicesItems;
