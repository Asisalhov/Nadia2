import {
  FaHome,
  FaPen,
  FaDollarSign,
  FaBoxes,
  FaUser,
  FaDolly,
  FaTasks,
  FaCog,
  FaChartBar
} from "react-icons/fa";

export default [
  {
    text: "Home",
    link: "/home",
    Icon: FaHome,
    new: false
  },
  {
    text: "Projects",
    link: "/projects",
    Icon: FaPen,
    new: true
  },
  {
    text: "Payments",
    link: "/payments",
    Icon: FaDollarSign,
    new: true
  },
  {
    text: "Reports",
    link: "/reports",
    Icon: FaChartBar,
    new: true
  },
  {
    text: "Expenses",
    link: "/exprenses",
    Icon: FaBoxes,
    new: true
  },
  {
    text: "Clients",
    link: "/clients",
    Icon: FaUser,
    new: true
  },
  {
    text: "Suppliers",
    link: "/suppliers",
    Icon: FaDolly,
    new: true
  },
  {
    text: "WorkLoad",
    link: "/workload",
    Icon: FaTasks,
    new: false
  },
  {
    text: "Settings",
    link: "/settings",
    Icon: FaCog,
    new: false
  }
];
