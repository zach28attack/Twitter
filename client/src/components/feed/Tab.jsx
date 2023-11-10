import Class from "./Tab.module.css";
import {useState} from "react";

export default function Tab() {
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const tabHandler = (e) => {
    if (e.target.closest("#for-you-feed") !== null) {
      setIsActive1(true);
      setIsActive2(false);
    } else if (e.target.closest("#following-feed") !== null) {
      setIsActive1(false);
      setIsActive2(true);
    }
  };

  return (
    <div className={Class.container}>
      <div className={Class.tab} onClick={tabHandler} id="for-you-feed">
        <span className={isActive1 ? Class.activeTab : Class.disabledTab}>For you</span>
        <div className={Class.activeBar}></div>
      </div>

      <div className={Class.tab} onClick={tabHandler} id="following-feed">
        <span className={isActive2 ? Class.activeTab : Class.disabledTab}>Following</span>
        <div className={Class.activeBar}></div>
      </div>
    </div>
  );
}
