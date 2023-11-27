import AccountNavItem from "../navbar/AccountNavItem";
import Class from "./Tweet.module.css";
import {IoChatbubbleOutline} from "react-icons/io5";
import {BiRepost} from "react-icons/bi";
import {CiHeart} from "react-icons/ci";
import {IoIosStats} from "react-icons/io";
import {IoBookmarkOutline} from "react-icons/io5";
import {IoMdShareAlt} from "react-icons/io";

export default function Tweet({tweet}) {
  return (
    <div className={Class.container}>
      <AccountNavItem name={tweet.name} username={tweet.username} />
      <div className={Class.body}>
        <p>{tweet.content}</p>
        <div>
          <IoChatbubbleOutline className={Class.icon} />
          <BiRepost className={Class.icon} />
          <CiHeart className={Class.icon} />
          <IoIosStats className={Class.icon} />
          <IoBookmarkOutline className={Class.icon} />
          <IoMdShareAlt className={Class.icon} />
        </div>
      </div>
    </div>
  );
}
