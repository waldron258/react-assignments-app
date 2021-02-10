import React from "react";
import "./App.css";
import ValidationComponent from "./Assignments/Assigment2/ValidationComponent";
import CharComponent from "./Assignments/Assigment2/CharComponent";

function App() {
  const [word, setWord] = React.useState("");
  const [wordArray, setWordArray] = React.useState([]);
  const [wordLength, setWordLength] = React.useState(0);

  const deletePersonHandler = (charIndex) => {
    const chars = wordArray;
    chars.splice(charIndex, 1);

    setWord(chars.join(""));
    setWordArray(chars);
    setWordLength(chars.join("").length);
  };

  return (
    <div className="App">
      <ValidationComponent length={wordLength} />
      <input
        label="Type something"
        onChange={(e) => {
          setWord(e.target.value);
          setWordLength(e.target.value.length);
          setWordArray(e.target.value.split(""));
        }}
        value={word}
      ></input>
      <br></br>
      {wordArray.map((value, key) => {
        return (
          <CharComponent
            value={value}
            key={key}
            click={() => deletePersonHandler(key)}
          />
        );
      })}
    </div>
  );
}

export default App;
