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

  const fib = useCallback((n) => {
    return n <= 1 ? n : fib(n-1) + fib(n-2)  

  }, [])


  const fibNumber = useMemo(() => fib(userInput), [userInput, fib])

  const myArray = useMemo(() => getArray(), [])
  useEffect(() => {
    console.log("New Array");
  }, [myArray])




  return(
    <main className="App">
      <label htmlFor="">Fibonacci Sequence</label>
      <input type="text" placeholder="input" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>
      <h1>output:{userInput || ".."}</h1>
    </main>
  )


}

export default App;