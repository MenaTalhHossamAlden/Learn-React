import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log('render');
  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className="btn">
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // some logic
      console.log('scroll');
    };
    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc);
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
