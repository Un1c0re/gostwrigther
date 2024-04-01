import React, { useState } from 'react';
import './OptionsSelector.css'


const OptionsSelector = ({ onGostSelect }) => {
  const [selectedGost, setSelectedGost] = useState('');

  // Обновление состояния при выборе ГОСТ стандарта
  const handleSelectChange = (e) => {
    setSelectedGost(e.target.value);
    onGostSelect(e.target.value);
  };

  return (
    <div className="options-selector">
      <label htmlFor="gost-select">Выбор ГОСТа:</label>
      <select
        id="gost-select"
        value={selectedGost}
        onChange={handleSelectChange}
        className="gost-dropdown"
      >
        <option value="">Выберите стандарт...</option>
        <option value="gost-r-7-0-5-2008">ГОСТ Р 7.0.5-2008</option>
        <option value="gost-r-7-0-11-2011">ГОСТ Р 7.0.11-2011</option>
        <option value="gost-r-7-0-97-2016">ГОСТ Р 7.0.97-2016</option>
        {/* Добавьте дополнительные ГОСТы здесь */}
      </select>
    </div>
  );
};

export default OptionsSelector;
