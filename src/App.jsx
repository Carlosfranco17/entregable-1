import { useState } from "react";
import "./App.css";
import ContainerInfo from "./components/ContainerInfo";
import db from "./db/db.json";

const image = ["bg1", "bg2", "bg3", "bg4"];

function App() {
  const getRandomItem = (listItem) => {
    const randomIndex = Math.floor(Math.random() * listItem.length);

    return listItem[randomIndex];
  };
  const [quote, setQuote] = useState(getRandomItem(db));

  const [bgimage, setBgimage] = useState(getRandomItem(image));

  const handleNewQuote = () => {
    setQuote(getRandomItem(db));
    setBgimage(getRandomItem(image))
  };

  return (
    <div className={`App, ${bgimage}`}>

      <ContainerInfo quote={quote} handleNewQuote={handleNewQuote} />
      
    </div>
  );
}

export default App;
