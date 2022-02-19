import React from 'react';
import {UserSlice} from "./store/reducers/UserSlice";
import {useDispatch} from "react-redux";
import {useAppSelector} from "./hooks/redux";



function App() {
    const {count} = useAppSelector(state => state.userReducer)
    const {increment} = UserSlice.actions;
    const dispatch = useDispatch();
   return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment(8))}>INCREMENT</button>
    </div>
  );
}

export default App;
