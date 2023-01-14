import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😃": "Smiling",
  "🥳": "Party",
  "🥶": "Chillout",
  "🤬": "Scorn",
  "🤯": "mind blown",
  "🙏": "Namaste"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation ");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji === emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
