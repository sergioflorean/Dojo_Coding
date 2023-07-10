import React, { useState }  from 'react';

const CounterBtn = props =>{
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <div>
                {count}
            </div>

            <button onClick={handleClick}>click bitch</button>
        </div>
    );
}

export default CounterBtn;




