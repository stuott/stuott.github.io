import jsonData from "../data/quotes.json";
import { Title } from "./CardUtils";

export default function Quotes() {
  const data = jsonData.data;
  const date = new Date(Date.now());
  const quote = data[date.getDay() % data.length];

  return (
    <div className="text-zinc-300 grid gap-6">
      <Title title="Daily Meditation" />
      <div className="text-center text-lg">
        <blockquote>"{quote.text}"</blockquote>
        <p className="text-sm"> - {quote.author}</p>
      </div>
    </div>
  );
}
