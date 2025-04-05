import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../scss/MarkdownPopup.scss'; 

interface MarkdownPopupProps {
  isOpen: boolean;
  onClose: () => void;
  markdownFile: string;
  title: string;
}

function MarkdownPopup({ isOpen, onClose, markdownFile, title }: MarkdownPopupProps) {
  const [markdownContent, setMarkdownContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && markdownFile) {
      setLoading(true);
      setError(null);
      fetch(markdownFile)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Unable to load markdown data: ${response.status}`);
          }
          return response.text();
        })
        .then((data) => {
          setMarkdownContent(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setMarkdownContent(''); 
      setLoading(false);
      setError(null);
    }
  }, [isOpen, markdownFile]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="markdown-popup-overlay">
      <div className="markdown-popup">
        <div className="markdown-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="markdown-close-button">
            x
          </button>
        </div>
        <div className="markdown-content">
          {loading && <p>Loading...</p>}
          {error && <p className="error-message">Error: {error}</p>}
          {!loading && !error && <ReactMarkdown>{markdownContent}</ReactMarkdown>}
        </div>
      </div>
    </div>
  );
}

export default MarkdownPopup;