import React from 'react';
import './ProcessedDocumentDisplay.css';

const ProcessedDocumentDisplay = ({ processedDocumentLink }) => {
  if (!processedDocumentLink) {
    return <div className="processed-document-display">Обработанный документ будет отображен здесь после преобразования.</div>;
  }

  return (
    <div className="processed-document-display">
      <a href={processedDocumentLink} download target="_blank" rel="noopener noreferrer">
        Скачать обработанный документ
      </a>
    </div>
  );
};

export default ProcessedDocumentDisplay;
