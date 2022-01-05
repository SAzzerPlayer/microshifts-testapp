import React from "react";
import "./App.css";
import { EmojisList } from "./components/EmojisList";
import { InfoTable } from "./components/InfoTable";
import { getRandomEmoji } from "./helpers/getRandomEmoji";

function App() {
  const [selectedEmoji, selectEmoji] = React.useState();

  const requestRandomEmoji = React.useCallback(async () => {
    const emoji = await getRandomEmoji();
    if (!selectedEmoji) {
      selectEmoji(emoji);
    }
  }, [selectedEmoji]);

  React.useEffect(requestRandomEmoji, []); //eslint-disable-line

  return (
    <div className="App">
      <InfoTable emoji={selectedEmoji} />
      <EmojisList />
    </div>
  );
}

export default App;
