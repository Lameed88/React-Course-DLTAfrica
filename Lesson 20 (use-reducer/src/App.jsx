import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch(action.type) {
    case'increment':
    return{...state, count: state.count + 1}
    case'decrement':
    return{..state, count: state.count - 1}
    case 'newUserInput':
      return {userInput: action.payload}
      case'tgColor':
      return {...state, color: !state.color}
    default:
      throw new Error()
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer,{count: 0, userInput:'', color:false})
  // const [userInput, setUserInput] = useState("");
  // // const [count, setCount] = useState(0);
  // const [color, setColor] = useState(false);

  return (
    <main className="App" style={{ color: state.color ? "#fff" : "#fff952" }}>
      <input
     
        type="text"
        value={userInput}
        onChange={(e) => dispatch({type: 'newUserInput', payload: e.target.value})}
     
      />

      <br />
      <br />
      <p> {state.count}</p>
{/* use state */}
      {/* <section>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setColor((prev) => !prev)}>Color</button>
      </section> */}

<section>
        <button onClick={(() => dispatch({type: 'decrement'}))}>-</button>
        <button onClick={(() => dispatch({type: 'increment'}))}>+</button>
       
        <button onClick={(() => setColor((prev) => !prev))}>Color</button>
      </section>


      <br />
      <br />

      <p>{userInput}</p>
    </main>
  );
};

export default App;