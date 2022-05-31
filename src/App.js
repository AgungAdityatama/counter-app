import './App.css';

import { useSelector, useDispatch } from 'react-redux'

function App() {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aplikasi Penghitung</h1>
        <h3>Counter : {counter}</h3>
        <button className='btn' onClick={(() => dispatch({ type: "INCREMENT" }))}>INCREMENT</button>
        <button className='btn' onClick={(() => dispatch({ type: "DECREMENT" }))}>DECREMENT</button>
        <button className='btn' onClick={(() => dispatch({ type: "RESET" }))}>RESET</button>
      </header>
    </div>
  );
}

export default App;
