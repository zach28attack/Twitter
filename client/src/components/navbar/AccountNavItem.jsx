import Class from "./AccountNavItem.module.css";
import {VscVerifiedFilled} from "react-icons/vsc";
import {FiMoreHorizontal} from "react-icons/fi";

export default function AccountNavItem() {
  return (
    <div className={Class.container}>
      <div className={Class.group1}>
        <div className={Class.profilePic}>
          <div></div>
          <img src="placeholderIMG.jpg" alt="profile-pic" />
        </div>
        <div>
          <div className={Class.nameGroup}>
            <span>Zachary</span>
            <VscVerifiedFilled className={Class.icon} />
          </div>
          <div className={Class.usernameGroup}>
            <span>@zach28attack</span>
          </div>
        </div>
      </div>
      <FiMoreHorizontal />
    </div>
  );
}
