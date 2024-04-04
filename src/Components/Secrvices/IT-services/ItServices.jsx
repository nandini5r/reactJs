import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import img from "../../../utils/AdobeStock_126016889.jpeg";
import img2 from "../../../utils/pexels-essow-k-1042143.jpg";
import img3 from "../../../utils/1_m6TqmUOUqUYA95MCee27iA.jpg";
import img4 from "../../../utils/i-2.webp";
import img5 from "../../../utils/digital-icons-forming-the-cloud-storage-symbol-4xa844ypd3ywfa8q.jpg";
import img6 from "../../../utils/n0X9DUy5e-C02qm7iKMcCP9BDPV3uXMAddYsRRGN7F8.jpg";
import img7 from "../../../utils/it.jpeg"
import img8 from "../../../utils/non-it.jpeg"
import "./ItServices.scss";
const itServicesData = [
  {
    title: "Software Development",
    description:
      "Our software development service crafts tailored solutions, leveraging cutting-edge technologies to meet your unique business needs. From intuitive interfaces to scalable architectures, we deliver efficient and innovative software that drives growth and enhances user experiences.",
    icon: img, // Replace with your icon class
    backgroundColor: "#f8f9fa",
    iconColor: "#28a745",
  },
  {
    title: "Application Development",
    description:
      "Android and iOS platforms feature unique development environments like Android Studio and Xcode, with specific programming languages such as Java/Kotlin for Android and Swift/Objective-C for iOS. Each platform also hosts its distribution channel—the Google Play Store for Android and the Apple App Store for iOS",
    icon: img2,
    backgroundColor: "#faf0f0",
    iconColor: "#dc3545",
  },

  {
    title: "API Integration",
    description:
      "API integration is the key to connecting software systems effortlessly. It automates tasks, enhances efficiency, and unlocks new opportunities for your business. Ready to streamline workflows and boost productivity? Let's integrate APIs and propel your business forward.",
    icon: img3,
    backgroundColor: "#f8f9fa",
    iconColor: "#28a745",
  },
  {
    title: "Cloud Implementation And Cost Optimisation",
    description:
      "Our comprehensive cloud consulting services encompass strategic planning, implementation, and ongoing management, ensuring seamless integration and maximum efficiency for your organization's cloud initiatives.",
    icon: img4,
    backgroundColor: "#f8f9fa",
    iconColor: "#28a745",
  },
  {
    title: "Digital Marketing",
    description:
      "Looking to expand your online reach? Enter digital marketing! It's all about using online channels like social media, SEO, and email to connect with your audience and grow your business. Ready to boost your online presence and stand out from the crowd? Let's get started!.",
    icon: img5,
    backgroundColor: "#f8f9fa",
    iconColor: "#28a745",
  },
  {
    title: "Web Application Development ",
    description:
      "Web app development creates software accessed via web browsers, using HTML, CSS, and JavaScript for frontend and backend. It includes planning, design, coding, testing, deployment, and maintenance.",
    icon: img6,
    backgroundColor: "#f8f9fa",
    iconColor: "#28a745",
  },
];

const recruitmentServicesData = [
  {
    title: "IT Recruitment",
    description:
      "IT recruitment is a specialized service focused on sourcing, attracting, and hiring top talent for positions within the information technology sector. With expertise in identifying candidates with the necessary technical skills and cultural fit,",
    icon: img7,
    backgroundColor: "#e0e0e0",
    iconColor: "#333",
  },
  {
    title: "Non -IT Recruitment",
    description:
      " Non-IT recruitment services focus on understanding the unique requirements of each job role and matching qualified candidates with suitable opportunities in various sectors such as healthcare, finance, retail, manufacturing, hospitality, and more. ",
    icon: img8, // Replace with your icon class
    backgroundColor: "#e8e8e8",
    iconColor: "#333",
  },
 
];

const Services = () => {
  return (
    <section className="services">
      <div className="service-section">
        <h1>IT Services</h1>
        <div className="service-grid">
          {itServicesData.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="service-section">
          <h1>RPO And Staffing</h1>
          <div className="service-grid">
            {recruitmentServicesData.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
