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
    link: "/",
    Icon: FaHome,
    new: false
  },
  {
    text: "Projects",
    link: "/",
    Icon: FaPen,
    new: true
  },
  {
    text: "Payments",
    link: "/",
    Icon: FaDollarSign,
    new: true
  },
  {
    text: "Reports",
    link: "/",
    Icon: FaChartBar,
    new: true
  },
  {
    text: "Expenses",
    link: "/",
    Icon: FaBoxes,
    new: true
  },
  {
    text: "Clients",
    link: "/",
    Icon: FaUser,
    new: true
  },
  {
    text: "Suppliers",
    link: "/",
    Icon: FaDolly,
    new: true
  },
  {
    text: "WorkLoad",
    link: "/",
    Icon: FaTasks,
    new: false
  },
  {
    text: "Settings",
    link: "/",
    Icon: FaCog,
    new: false
  }
];
