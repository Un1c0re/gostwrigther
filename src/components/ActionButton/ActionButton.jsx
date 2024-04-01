import React from 'react';
import './ActionButton.css';

const ActionButton = ({ onTransform }) => {
  return (
    <button className="action-button" onClick={onTransform}>
      Преобразовать документ
    </button>

  );
};

export default ActionButton;
