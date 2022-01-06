import React from "react";
import "./App.css";
import {InfoTable} from "./components/InfoTable";
import {getRandomEmoji} from "./helpers/getRandomEmoji";
import {EmojisSelector} from "./components/EmojisSelector";

function App() {
  const [selectedEmoji, selectEmoji] = React.useState();

  const requestRandomEmoji = React.useCallback(async () => {
    const emoji = await getRandomEmoji();
    selectEmoji(emoji);
  }, []);

  React.useEffect(requestRandomEmoji, [requestRandomEmoji]);

  return (
      <div className="App">
        <InfoTable emoji={selectedEmoji}/>
        <EmojisSelector onSelectEmoji={selectEmoji}/>
      </div>
  );
}

export default App;
