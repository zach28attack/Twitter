import Feed from "../components/feed/Feed";
import Class from "./Home.module.css";

export default function Home() {
  return (
    <div className={Class.container}>
      <Feed />
    </div>
  );
}
