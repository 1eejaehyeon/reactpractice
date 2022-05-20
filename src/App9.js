import act, {useState, createContext, useReducer} from 'react';

const CounterContext = createContext();

const INCREMENT = "COUNTER/INCREMENT"


const reducer = (prevState, action) => {
    const { type } = action;
    if ( type === INCREMENT ) {
        
    }
}



const App = () => {
    const [state, dispatch] = useReducer(reducer,0);

    return(
        <div>
            <h1>App9</h1>
            <GameBox />
        </div>
    );
};


const GameBox = () => {
    return(

    )
}