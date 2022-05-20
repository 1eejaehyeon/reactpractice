import React, { useState, useReducer } from 'react';
/*
const App = () => {
    const [person, setPerson] = useState({myname: '', age: ''})
    const onChange = (e) => {
        const {name, value } = e.target;
        setPerson((prevState) => ({
            ...prevState,
            [name] : value,
        }));
    }
    const {myname, age} = person;
    return (
        <div>
             
            name : {myname}, age: {age}
            <hr/>
            {JSON.stringify(person)}
            <br />
            <input
                type = "text"
                name = "myname"
                placeholder='name'
                onChange = {onChange}
            />
            <input
                type="text"
                name = "age"
                placeholder='age'
                onChange={onChange}
            />
        </div>
            
    );
};
*/


// useReducer 이용하기


const reducer = (prevState, action) => {
    const {type, value} = action;
    if (type === 'SET_NAME') {
        return { ...prevState, myname: value};
    } else if (type ==='SET_AGE') {
        return { ...prevState, age: value}
    }
    return prevState;
}

    const App = () => {
    cosnt [State, dispatch] = useReducer(reducer, {myname:'', age:''});
    const { myname, age} = state;
    const onChange = (e) => {
        const {name:type, value} = e.target;
        dispatch({type, value});
    };
    return (
        <div>
                
            name : {myname}, age: {age}
            <hr/>
            {JSON.stringify(person)}
            <br />
            <input
                type = "text"
                name = "SET_NAME"
                placeholder='name'
                onChange = {onChange}
            />
            <input
                type="text"
                name = "SET_AGE"
                placeholder='age'
                onChange={onChange}
            />
        </div>
            
    );
    };

}

export default App;