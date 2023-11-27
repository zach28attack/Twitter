import {useState} from "react";
import Class from "./TweetComposition.module.css";
import {HiOutlinePhotograph} from "react-icons/hi";
import {HiGif} from "react-icons/hi2";
import {BsEmojiSmile} from "react-icons/bs";
import {GoTasklist} from "react-icons/go";
import {AiOutlineSchedule} from "react-icons/ai";
import {SiGooglemaps} from "react-icons/si";

export default function TweetComposition({setInsertedTweets}) {
  // TODO: Find out how to automatically stretch the
  //       textarea on each line break while stretching
  //       the container height.

  const [rows, setRows] = useState(1);
  const [tweetText, setTweetText] = useState("");

  const tweetChangeHandler = (e) => {
    setTweetText(e.target.value);
  };
  const submitHandler = (e) => {
    setInsertedTweets((prev) => [
      {
        userId: new Date().getTime(),
        content: tweetText,
        date: new Date(),
        name: "John Doe",
        username: "XXXXXXX",
      },
      ...prev,
    ]);
  };

  return (
    <div className={Class.container}>
      <div className={Class.inputGroup}>
        <div className={Class.img}>
          <div></div>
          <img src="placeholderIMG.jpg" alt="" />
        </div>
        <form>
          <textarea type="text" placeholder="What is happening?!" rows={rows} onChange={tweetChangeHandler} />
        </form>
      </div>
      <div className={Class.controlGroup}>
        <div>
          <HiOutlinePhotograph className={Class.icon} />
          <HiGif className={Class.icon} />
          <GoTasklist className={Class.icon} />
          <BsEmojiSmile className={Class.icon} />
          <AiOutlineSchedule className={Class.icon} />
          <SiGooglemaps className={Class.icon} />
        </div>
        <button onClick={submitHandler}>Post</button>
      </div>
    </div>
  );
}
