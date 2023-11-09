import { useState, useRef } from "react";
import { render } from "react-dom";

const App = () => {
  
  return (
    <main className="App">
      <input
    
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

      <button onClick={resetTimer}>Reset</button>

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