import { useState, useEffect,  } from "react";



const App = () => {
  const [userInput, setUserInput] = useState("");
  const [randomInput, setRandomInput] = useState("");




  return(
    <main className="App">
      <label htmlFor="">Fibonacci Sequence</label>
      <input type="text" placeholder="position" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>

     
      <p>Number: {fibNumber || "no number added yet"}</p>
      <br />
      <br />


      <label htmlFor="">Random Input:</label>
      <input type="text" 
      value={randomInput}
      placeholder='Type anything...'
      onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>Result: {randomInput}</p>

    </main>
  )

}

export default App;