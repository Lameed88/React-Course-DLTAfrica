import { useState, useRef } from "react";



const App = () => {
  const [randomInput, setRandomInput] = useState("");
  const [seconds, setSeconds] = useState("0");

  const renders = useRef(0);

  const inputRef =useRef()

  const handleInputChange = (e) => {
    setRandomInput(e.targetvalue);

    renders.current++
  }

  return(
    <main className="App">
  
      <input 
      ref={inputRef}
      type="text" 
      value={randomInput}
      placeholder='Type anything...'
      />
      <p>Renders: {randomInput}</p>

      <br />
      <br />
      <section>
        <button>Stop</button>
        <button>Start</button>
      </section>

      <button>Reset</button>

      <br />
      <br />

      <p>Seconds:</p>

      <br />
      <br />
      <p>{randomInput}</p>

    </main>
  )

}

export default App;