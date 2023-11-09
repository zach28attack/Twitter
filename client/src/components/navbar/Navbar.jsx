import Class from "./Navbar.module.css";
import {RiTwitterXFill} from "react-icons/ri";
import {GoHomeFill} from "react-icons/go";
import {IoSearch} from "react-icons/io5";
import {BsBellFill} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";
import {HiOutlineBookmark} from "react-icons/hi";
import {MdGroups2} from "react-icons/md";
import {LuUser} from "react-icons/lu";
import {CgMoreO} from "react-icons/cg";
import AccountNavItem from "./AccountNavItem";

export default function Navbar() {
  return (
    <nav className={Class.container}>
      <ul>
        <li className={Class.navItem}>
          <RiTwitterXFill className={Class.logo} />
        </li>
        <li className={Class.navItem}>
          <GoHomeFill className={Class.icon} />
          <span>Home</span>
        </li>
        <li className={Class.navItem}>
          <IoSearch className={Class.icon} />
          Explore
        </li>
        <li className={Class.navItem}>
          <BsBellFill className={Class.icon} />
          Notifications
        </li>
        <li className={Class.navItem}>
          <AiOutlineMail className={Class.icon} />
          Messages
        </li>
        <li className={Class.navItem}>
          <HiOutlineBookmark className={Class.icon} />
          Bookmark
        </li>

        <li className={Class.navItem}>
          <MdGroups2 className={Class.icon} />
          Communities
        </li>
        <li className={Class.navItem}>
          <RiTwitterXFill className={Class.icon} />
          Premium
        </li>
        <li className={Class.navItem}>
          <LuUser className={Class.icon} />
          Profile
        </li>
        <li className={Class.navItem}>
          <CgMoreO className={Class.icon} />
          More
        </li>
        <button className={Class.post}>Post</button>
      </ul>

      <AccountNavItem />
    </nav>
  );
}
