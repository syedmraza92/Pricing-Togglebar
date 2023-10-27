import React, { useState } from 'react';
import './Button.css';

const Button = ({ onToggle }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
    onToggle();
  };

  const buttonStyle = {
    transform: isToggled ? 'translateX(150px)' : 'translateX(0)',
    backgroundColor: isToggled ? '#3498db' : '#3498db',
  };

  return (
    <div>
      <div className="toggle-bar" onClick={handleToggleClick}>
        <div className="toggle-label yearly">Monthly</div>
        <div className="toggle-button" style={buttonStyle}></div>
        <div className="toggle-label monthly">Yearly</div>
      </div>
    </div>
  );
};

export default Button;

