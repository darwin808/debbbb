import React, { useState } from "react";

import { DebounceInput } from "react-debounce-input";
function App() {
  const [search, setsearch] = useState("");
  return (
    <div className="App">
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={(event) => setsearch(event.target.value)}
        style={{ background: "green" }}
      />

      <p>Value: {search}</p>
    </div>
  );
}

export default App;
