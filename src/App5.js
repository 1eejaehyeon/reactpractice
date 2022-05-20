import React, { useState, useEffect } from 'react';


const useCurrentTime = () => {
    const [currentTime, setCurrentTime] = useState();

    useEffect( ()=> {
        const handler = setInterval(() => {
            const currentTime = new Date().toISOString().slice(11,19);
            setCurrentTime(currentTime);
        },1000);
        return () => clearInterval(handler);
        
    },[]);
        

    return currentTime;
}

const App = () => {
    const currentTime = useCurrentTime();
    return(
        <div>
            <h1>현재시각</h1>
            {currentTime}
        </div>
    )
}

export default App;