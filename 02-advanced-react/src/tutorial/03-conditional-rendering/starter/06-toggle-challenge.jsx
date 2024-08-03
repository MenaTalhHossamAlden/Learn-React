import { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(true);
  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };
  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        toggle
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
