import React, { useCallback, useState } from 'react';
import './DocumentUploader.css';

const DocumentUploader = ({ onFileUpload }) => {
  const [dragActive, setDragActive] = useState(false);

  // Функция для обработки файлов
  const handleFile = files => {
    // Вы можете добавить дополнительные проверки и логику обработки файлов здесь
    onFileUpload(files[0]);
  };

  // Вызывается когда файлы перетаскиваются на область
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  // Вызывается когда файлы бросают на область
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  }, []);

  // Вызывается когда файлы выбраны через диалоговое окно
  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  return (
    <div
      className={`uploader ${dragActive ? 'active' : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-upload"
        style={{ display: 'none' }}
        onChange={handleChange}
      />
      <label htmlFor="file-upload" className="upload-label">
        <div className="upload-content">
          {dragActive ? (
            <p>Отпустите файлы здесь...</p>
          ) : (
            <p>Перетащите файлы сюда или кликните для выбора</p>
          )}
        </div>
      </label>
    </div>
  );
};

export default DocumentUploader;
