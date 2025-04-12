import "./App.css";
import Quote from "./components/Quote";
import { useEffect, useState } from "react";

function App() {

  const [quote, setQuote] = useState([]);
  const colours = [
    "bg-pastel-pink",
    "bg-pastel-blue",
    "bg-pastel-green",
    "bg-pastel-purple",
    "bg-pastel-yellow",
    "bg-pastel-mint",
    "bg-pastel-peach",
    "bg-pastel-lavender",
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
  };

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      const data = await response.json();
      const quoteObj = data[0]; // quotable returns an array
      setQuote({ content: quoteObj.content, author: quoteObj.author });
      console.log(quoteObj);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
    getRandomColor();
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div
      className={`w-full h-screen ${getRandomColor()} flex flex-col justify-center items-center`}
    >
      <button onClick={getQuote} className="p-2 font-noto mb-4">New Quote</button>
      <Quote quote={quote.content} author={quote.author} />
    </div>
  );
}

export default App;
