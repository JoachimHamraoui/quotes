import "./App.css";
import Quote from "./components/Quote";
import { useEffect, useState } from "react";
import { getRandomColor } from "./utils/colorsUtils";
import { getQuote } from "./services/quoteService";

function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState(getRandomColor());
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    const quoteData = await getQuote();
    setQuote(quoteData);
    setColor(getRandomColor());
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={`w-full h-screen ${color} flex flex-col justify-center items-center transition-all duration-300`}>
      <button onClick={fetchQuote} className="p-2 font-noto mb-4">New Quote</button>
      {loading ? (
        <p className="font-noto text-lg">Loading...</p>
      ) : (
        <Quote quote={quote.content} author={quote.author} />
      )}
    </div>
  );
}

export default App;
