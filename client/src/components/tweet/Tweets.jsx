import Class from "./Tweets.module.css";
import Tweet from "./Tweet";

export default function Tweets() {
  return (
    <div className={Class.container}>
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </div>
  );
}
