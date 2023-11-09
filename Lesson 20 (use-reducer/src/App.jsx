import { useState, useRef } from "react";


const App = () => {

  const [userInput, setUserInput] = useState('')
  const [count, setCount] = useState(0)
  const [color, setColor] = useState(false)
  
  return (
    <main className="App" style={{color: color ? '#fff' : '#fff92'}}>
      <input
    
       
        type="text"
        value={randomInput}
        onChange={(e) => setUserInput (e.target.value)}

      />
     

      <br />
      <br />

      <p>Count</p>

      <section>
        <button onClick={setCount(prev => prev-1 )}>-</button>
        <button onClick={setCount(prev => prev+1 )}>+</button>
        <button onClick={setColor(prev => !prev )}>Color</button>
       
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