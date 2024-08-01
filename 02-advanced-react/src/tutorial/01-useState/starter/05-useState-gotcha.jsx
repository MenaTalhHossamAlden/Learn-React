import { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      console.log('clicked the button');
      setValue((currentValue) => currentValue + 1);
    }, 3000);
  };
  return (
    <div>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick} className="btn">
        increase
      </button>
    </div>
  );
};

export default UseStateGotcha;
