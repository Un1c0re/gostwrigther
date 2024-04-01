import React from 'react';
import DocumentUploader from './components/DocumentUploader/DocumentUploader';
import OptionsSelector from './components/OptionsSelector/OptionsSelector';
import ActionButton from './components/ActionButton/ActionButton';
import ProcessedDocumentDisplay from './components/ProcessedDocumentDisplay/ProcessedDocumentDisplay';
import ChatPrompt from './components/ChatPrompt/ChatPrompt';
import './App.css';
import logo from './logo_grad.svg'; // Замените на правильный путь к файлу логотипа


function App() {
  // Здесь вы можете добавить состояние и функции для обработки данных из компонентов

  const handleFileUpload = (file) => {
    // Обработка загруженного файла
  };

  const handleGostSelect = (gost) => {
    // Обработка выбора ГОСТ стандарта
  };

  const handleTransformDocument = () => {
    // Логика для преобразования документа
  };

  const handleSendMessage = (message) => {
    // Логика для отправки сообщения в чат
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Логотип" className="App-logo" width="200" height="100"/>
        <h1>GOSTWRIGHTER</h1>
      </header>
      <div className="App-content">
        <DocumentUploader onFileUpload={handleFileUpload} />
        <div>
          <OptionsSelector onGostSelect={handleGostSelect} />
          <ActionButton onTransform={handleTransformDocument} />
        </div>
        <ProcessedDocumentDisplay /* props, если они нужны */ />
      </div>
      <footer className="App-footer">
        <ChatPrompt onSendMessage={handleSendMessage} />
      </footer>
    </div>
  );
}

export default App;