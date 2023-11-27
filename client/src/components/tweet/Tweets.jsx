import {useState} from "react";
import Class from "./Tweets.module.css";
import Tweet from "./Tweet";
import {useEffect} from "react";

export default function Tweets({insertedTweets}) {
  let dummyTweets = [
    {
      id: 1,
      name: "John Doe",
      username: "Johnny",
      date: "2022-01-01",
      content: "This is a test tweet",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "JaneDizzy",
      date: "2022-01-01",
      content: "Test tweet, tweeting now.",
    },
    {
      id: 3,
      name: "David Spade",
      username: "TigerIsnfs",
      date: "2022-01-01",
      content: "I am not a real person. This is a bot account.",
    },
    {
      id: 4,
      name: "Jingo Pringles",
      username: "Pringles",
      date: "2022-01-01",
      content: "I can't wait for santa to gift me my well earned presents.",
    },
  ];
  const [tweets, setTweets] = useState(dummyTweets);
  useEffect(() => {
    setTweets((prev) => [...insertedTweets, ...prev]);
  }, [insertedTweets]);

  return (
    <div className={Class.container}>
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} tweet={tweet} />;
      })}
    </div>
  );
}
