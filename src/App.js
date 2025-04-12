import "./App.css";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="w-full h-screen bg-pink-200 flex flex-col justify-center items-center">
      <Quote quote="Hello world !" author="Joachim" />
    </div>
  );
}

export default App;
