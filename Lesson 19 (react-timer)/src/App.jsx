import { useState, useRef } from "react";

const App = () => {
  const [randomInput, setRandomInput] = useState("");
  const [Seconds, setSeconds] = useState(0);

  const renders = useRef(0);

  const inputRef = useRef();

  const timerId = useRef();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      renders.current++;
      setSeconds((prev) => prev + 1);
    }, 1000);
    inputRef.current.focus()
  };

  const stopTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0
    inputRef.current.focus()
  }

  const resetTimer = () => {
    clearInterval(timerId.current)
    timerId.current = 0
    setSeconds(0)
    

  }

  const handleInputChange = (e) => {
    setRandomInput(e.target.value);

    renders.current++;
  };

  //const focusOnInput = () =>{
  //inputRef.current.focus()
  // }

  return (
    <main className="App">
      <input
        ref={inputRef}
        onChange={handleInputChange}
        type="text"
        value={randomInput}
        placeholder="Type anything"
      />
      <p>Renders: {renders.current}</p>

      <br />
      <br />

      <section>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={startTimer}>Start</button>
      </section>

      <button>Reset</button>

      <br />
      <br />

      <p>Seconds: {Seconds}</p>

      <br />
      <br />

      <p>{randomInput}</p>
    </main>
  );
};

export default App;