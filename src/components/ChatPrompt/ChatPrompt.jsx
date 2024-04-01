import React, { useState } from 'react';
import './ChatPrompt.css'; // Убедитесь, что создали соответствующий CSS файл

const ChatPrompt = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage(''); // Очищаем поле ввода после отправки сообщения
    }
  };

  return (
    <form className="chat-prompt" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={handleChange}
        className="chat-input"
        placeholder="Спросите GostChat..."
      />
      <div class='button-container'>
        <button type="submit" className="send-button">
            Отправить
        </button>
      </div>
    </form>
  );
};

export default ChatPrompt;
