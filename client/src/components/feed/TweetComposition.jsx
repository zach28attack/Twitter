import {useState} from "react";
import Class from "./TweetComposition.module.css";

export default function TweetComposition() {
  // TODO: Find out how to automatically stretch the
  //       textarea on each line break while stretching
  //       the container height.
  const [rows, setRows] = useState(1);

  return (
    <div className={Class.container}>
      <div className={Class.inputGroup}>
        <div className={Class.img}>
          <div></div>
          <img src="placeholderIMG.jpg" alt="" />
        </div>
        <form>
          <textarea type="text" placeholder="What is happening?!" rows={rows} />
        </form>
      </div>
      <div className={Class.controlGroup}></div>
    </div>
  );
}
