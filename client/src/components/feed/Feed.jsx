import {useState} from "react";
import Class from "./Feed.module.css";
import Tab from "./Tab";
import TweetComposition from "./TweetComposition";
import Tweets from "../tweet/Tweets";

export default function Feed() {
  const [insertedTweets, setInsertedTweets] = useState([]);

  return (
    <div className={Class.container}>
      <Tab />
      <TweetComposition setInsertedTweets={setInsertedTweets} />
      <Tweets insertedTweets={insertedTweets} />
    </div>
  );
}
