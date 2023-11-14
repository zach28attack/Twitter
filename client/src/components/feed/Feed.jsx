import Class from "./Feed.module.css";
import Tab from "./Tab";
import TweetComposition from "./TweetComposition";
import Tweets from "../tweet/Tweets";

export default function Feed() {
  return (
    <div className={Class.container}>
      <Tab />
      <TweetComposition />
      <Tweets />
    </div>
  );
}
