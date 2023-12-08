// ArticleTemplate.jsx

import React from 'react';
import './articletemplate.css'; // Gantilah dengan nama file CSS Anda jika diperlukan

const ArticleTemplate = ({ title, author, date, content }) => {
  return (
    <div className="article-container">
      <h1 className="article-title">{title}</h1>
      <div className="article-info">
        <p className="article-author">By {author}</p>
        <p className="article-date">{date}</p>
      </div>
      <div className="article-content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ArticleTemplate;
