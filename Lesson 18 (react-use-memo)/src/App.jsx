import { useState, useEffect, useCallback, useMemo } from "react";

import React from "react";

const getArray = () => {
  for(let i = 0; i < 100000000; i++) {

  }
  return ['Muhammad', "Fine Boy"]
}

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [randomInput, setRandomInput] = useState("");



  return(
    <main className="App">
      <input type="text" placeholder="input" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
      <h1>output:{userInput || ".."}</h1>
    </main>
  )


}

export default App;