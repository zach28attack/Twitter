import Class from "./SideBar.module.css";
import {IoSearch} from "react-icons/io5";

export default function SideBar() {
  return (
    <div className={Class.container}>
      <div className={Class.sideBar}>
        <form className={Class.searchBar}>
          <IoSearch />
          <input type="text" placeholder="Search" />
        </form>
        <div className={Class.promotion}>
          <span>Subscribe to premium</span>
          <span>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
          <span>subscribe</span>
        </div>
        <div className={Class.trends}>
          <span className={Class.trendsTitle}>What's happening</span>
          <ul>
            <li className={Class.trendItem}>
              <div>
                <span>{`Sports - Trending`}</span>
              </div>
              <span>Football</span>
              <span>25.4K posts</span>
            </li>
          </ul>
        </div>
        <div className={Class.friends}>Follow these people</div>
      </div>
    </div>
  );
}
