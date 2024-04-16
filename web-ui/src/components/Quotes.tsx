import jsonData from "../data/quotes.json";
import { Section, SectionTitle } from "./SectionUtils";

export default function Quotes() {
  const data = jsonData.data;
  const date = new Date(Date.now());
  const quote = data[date.getDay() % data.length];

  return (
    <Section id="meditation">
      <SectionTitle title="Daily Meditation" />
      <div className="text-center text-lg">
        <blockquote>"{quote.text}"</blockquote>
        <p className="text-sm"> - {quote.author}</p>
      </div>
    </Section>
  );
}
