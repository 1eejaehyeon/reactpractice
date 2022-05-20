import React, {useState} from "react";


const App = () => {
    const [value, setValue] = useState(0);
    const onIncrement = () => {
        setValue((prevState) => prevState + 1);
    };
    return(
        <div onClick={onIncrement}>
            {value}
        </div>

    );
}; 

export default App;