import {React } from "react";
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';  // import your actions here

function App() {
  // get me the count state variable from the counter reducer - destructuring count
  const { count } = useSelector((state) => state.counter);
  // set up the dispatch to call an action from a reducer
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>The count is: {count}</h1>

      {/* dispatch the increment action to the reducer which performs the spcified change */}
      <button onClick={()=> dispatch(increment())}>Incement</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
      <button onClick={()=> dispatch(incrementByAmount(10))}>Increment Bby 10</button>
    </div>
  );
}

export default App;
