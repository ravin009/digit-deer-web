// src/data/servicesData.js
import { FaMobileAlt, FaLaptopCode, FaDesktop, FaNetworkWired, FaChartLine } from 'react-icons/fa';

export const services = [
  {
    id: 1,
    title: "Mobile App Development",
    desc: "Android & iOS apps using Flutter and React Native.",
    icon: <FaMobileAlt />
  },
  {
    id: 2,
    title: "Website Development",
    desc: "Modern responsive websites using React JS and Next.js.",
    icon: <FaLaptopCode />
  },
  {
    id: 3,
    title: "Desktop Software",
    desc: "Windows/Mac software for offline business management.",
    icon: <FaDesktop />
  },
  {
    id: 4,
    title: "Web Portals",
    desc: "Secure portals for vendors, employees, and admins.",
    icon: <FaNetworkWired />
  },
  {
    id: 5,
    title: "IT Product Management",
    desc: "Consulting and managing IT product lifecycles.",
    icon: <FaChartLine />
  }
];