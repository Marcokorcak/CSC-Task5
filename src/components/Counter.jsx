import { useReducer } from 'react';

const Counter = () => {

    const initialState = {
        count: 0,
        numberToChangeBy: 1,
    };

    const reducer = (state, action) => {

        if(action.type === 'NumberToChangeBy')
        {
            const clonedState = {...state};
            let newNum = action.nextNum;
            clonedState.numberToChangeBy = newNum;
            return clonedState;
            
        }

        if(action.type === 'IncrementNumber')
        {
            const clonedState = {...state};
            //let newCount = state.count + state.numberToChangeBy;
           let newCount = parseInt(state.count,10)+parseInt(state.numberToChangeBy,10)
            clonedState.count = newCount;
            return clonedState;
        }

        if(action.type === 'DecrementNumber')
        {
            const clonedState = {...state};
           //let newCount = state.count - state.numberToChangeBy;
           let newCount = parseInt(state.count,10)-parseInt(state.numberToChangeBy,10)
            clonedState.count = newCount;
            return clonedState;
        }



        return state;
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const NumberToChangeBy = () => {
        dispatch({type: 'NumberToChangeBy'})
    };

    const IncrementNumber = () => {
        dispatch({type: 'IncrementNumber'})
    };

    const DecrementNumber = () => {
        dispatch({type: 'DecrementNumber'})
    };

    function handleInputChange(e) {
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