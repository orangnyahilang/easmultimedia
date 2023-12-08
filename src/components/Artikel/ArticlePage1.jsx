// Contoh penggunaan dalam halaman atau komponen lain

import React from 'react';
import ArticleTemplate from './ArticleTemplate'; // Sesuaikan path-nya

const ArticlePage1 = () => {
  const articleData = {
    title: 'Judul Artikel',
    author: 'Nama Penulis',
    date: '12 Desember 2023',
    content: [
      'Paragraf pertama artikel.',
      'Paragraf kedua artikel.',
      'Paragraf ketiga artikel.',
      // Tambahkan paragraf sesuai kebutuhan
    ],
  };

  return (
    <div>
      <ArticleTemplate {...articleData} />
    </div>
  );
};

export default ArticlePage1;
