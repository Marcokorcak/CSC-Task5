import { useReducer } from 'react';

const Counter = () => {

    const initialState = { //initial values for the inital state 
        count: 0,
        numberToChangeBy: 1,
    };

    const reducer = (state, action) => {

        if(action.type === 'NumberToChangeBy') //function for keeping track of number to change by 
        {
            const clonedState = {...state}; //cloning the state 
            let newNum = action.nextNum; //setting the new variable equal  to the nextNum
            clonedState.numberToChangeBy = newNum; //changing the numberToChangeBy in the cloned state
            return clonedState; //returning the cloned state 
            
        }

        if(action.type === 'IncrementNumber') //function for incrementing the count
        {
            const clonedState = {...state}; //cloning the state 
           let newCount = parseInt(state.count,10)+parseInt(state.numberToChangeBy,10) //establishing the new count vairable
            clonedState.count = newCount; //setting the count of the cloned state to the new vairable 
            return clonedState; //returning the cloned state 
        }

        if(action.type === 'DecrementNumber') //function for decrementing the count 
        {
            const clonedState = {...state}; //cloning the state 
           let newCount = parseInt(state.count,10)-parseInt(state.numberToChangeBy,10) //establishing the new count vairable
            clonedState.count = newCount; //setting teh cloned state count to the new value 
            return clonedState; //returning the cloned state 
        }

        else {
            throw Error('Unknown action: ' + action.type); //error catching
        }

            return state;
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    /* 
    functions that calls dispatch 
    */
    const NumberToChangeBy = () => { 
        dispatch({type: 'NumberToChangeBy'})
    };

    const IncrementNumber = () => {
        dispatch({type: 'IncrementNumber'})
    };

    const DecrementNumber = () => {
        dispatch({type: 'DecrementNumber'})
    };

    function handleInputChange(e) { //function that handles the changes in NumberToChangeBy
        dispatch({
          type: 'NumberToChangeBy',
          nextNum: e.target.value
        }); 
      }
    

    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={IncrementNumber}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={DecrementNumber}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={handleInputChange}  type="number" value={state.numberToChangeBy} name="number" id="number" /></p>
  </div>);
}

export default Counter;