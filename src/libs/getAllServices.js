import webdesignicon from "@/assets/img/service/web-design-icon.png";
import seoicon from "@/assets/img/service/seo-icon.png";
import marketingicon from "@/assets/img/service/marketing.png";
import dataanaliticsicon from "@/assets/img/service/data-analytics-icon.png";

const getAllServices = () => {
  const services = [
    {
      id: 1,
      title: "SEO",
      desc: "Organic growth, keyword optimization, and performance tracking",
      detailsImg: seoicon,
      img: seoicon,
      category: "Cost Reduction Analysis",
      duration: "1700",
      url: "seo",
    },
    {
      id: 2,
      title: "Website Design",
      desc: "Responsive, user-friendly designs built for conversion",
      detailsImg: webdesignicon,
      img: webdesignicon,
      category: "Strategic Planning",
      duration: "1900",
      url: "web-design",
    },
    {
      id: 3,
      title: "Performance Marketing",
      desc: "ROI-focused campaigns with precision targeting",
      detailsImg: marketingicon,
      img: marketingicon,
      category: "Strategic Planning",
      duration: "1900",
      url: "marketing",
    },
    {
      id: 4,
      title: "Data Analytics",
      desc: "Reporting, predictive analytics, and actionable insights",
      detailsImg: dataanaliticsicon,
      img: dataanaliticsicon,
      category: "Strategic Planning",
      duration: "1900",
      url: "data-analytics",
    },
  ];
  return services;
};

export default getAllServices;
