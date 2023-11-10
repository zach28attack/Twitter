import Class from "./Feed.module.css";
import Tab from "./Tab";
import TweetComposition from "./TweetComposition";

export default function Feed() {
  return (
    <div className={Class.container}>
      <Tab />
      <TweetComposition />
    </div>
  );
}
