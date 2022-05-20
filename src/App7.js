import React, { createContext, useContext }  from "react";

const MessageContext = createContext();


const App = () => {
    return (
        <MessageContext.Provider value ="provider Values">
        <Level2Wrapper />
    </MessageContext.Provider>
    );
    
};

const Leve12Wrapper = () => {
    const message = useContext(MessageContext);

    return (
        <div>
            <Level2 message = {message} />
        </div>
    );
};

 const Level2 = ({message}) => <div> Level2: {message}</div>


export default App;