import React, { useState, useEffect } from 'react';
import './articletemplate.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import php1 from '../../assets/images/php1.png'
import { faAnglesLeft, faArrowUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticlePage1 = () => {

  const [code, setCode] = useState(
    ``
  );
  
  const handleClick = () => {
    // Mengarahkan pengguna ke halaman dengan ID 'list'
    const listSection = document.getElementById('list');
    if (listSection) {
      listSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    window.history.back();
  };




  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="article-container">
  
      <button
        onClick={scrollToTop}
        style={{
          display: isVisible ? 'block' : 'none',
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          fontSize: '0.8rem',
          backgroundColor: '#007bff',
          color: '#ffffff',
          padding: '7px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          zIndex: '2',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
      <FontAwesomeIcon icon={faArrowUp} style={{ marginRight: '5px' }} />
      Back to Top
      </button>
      <div className='back'>
      <FontAwesomeIcon icon={faAnglesLeft} style={{fontSize: '2rem', cursor: 'pointer', color: '#2471A3'}} onClick={handleBack} />
      </div>



      <div className='headerartikel'>
        <h1>Konsep Dasar Pemrograman PHP</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>Pengenalan PHP:</b></h2>
        <p>


        Selamat datang di Tutorial Belajar PHP untuk pemula..

Banyak pemula yang bingung dan bertanya:

“Gimana sih cara membuat web dengan PHP?”

“Apa saja alat-alat yang diperlukan untuk coding PHP?”

“Mengapa kita butuh PHP?”

..dan masih banyak pertanyaan lainnya.

Tentang..

Kita akan mempelajarinya sampai paham.

Mulai dari sejarah awal kemunculan PHP, sampai bisa paham konsep dasar pemrograman PHP.

Siap?

Pastikan kamu membaca sampai akhir ya.

Mari kita mulai..
<br/>
<br/>
<strong>Asal usul kemunculan PHP</strong>
<br/>
Pada zaman dulu.. Web itu statis, cuma dibuat dengan HTML dan sedit sentuhan CSS.

Waktu itu memang teknologi web masih belum secanggih sekarang.

Jadi saat orang membuka web, mereka sebenarnya cuma membuka file HTML dari web server.

<br/>
<br/>
<img src='https://www.petanikode.com/img/php-konsep/web-statis.avif' alt=''/>

Masalah waktu itu:

Jika webnya statias, kita nggak bisa tau siapa saja yang buka dan berapa orang yang buka.

Karena itu, di tahun 1993.. Rasmus Lerdorf membuat bahasa pemrograman PHP.


Awalnya PHP cuma dipakai sendiri oleh Rasmus Lerdorf, kemudian di-rilis ke publik di tahun 1995.

Dulu PHP dikenal sebagai singkatan:

PHP = Personal Home Page.

Tapi makin ke sini, singkatan itu beubah menjad:

PHP = PHP: Hypertext Preprocessor.
<br/>
<br/>
<strong>Apa itu PHP?</strong>
<br/>
PHP adalaha bahasa pemrograman scripting yang berjalan pada server. PHP dikembangkan dengan bahasa C sehingga sintaksnya mirip-mirip dengan bahasa C.

Jadi, jika kamu sudah belajar bahasa C sebelumnya, kamu akan mudah memahami sintaks PHP.
<br/>
<br/>
<strong>Peralatan yang dibutuhkan untuk Coding PHP</strong>
<br/>
Ada 4 tiga alat yang perlu disiapkan untuk mulai coding PHP:
<br/>
<br/>
1. PHP interpreter - program buat menjalankan PHP pada server
<br/>
2. Teks Editor - buat menulis kode PHP
<br/>
3. Web Server - service buat menjalankan PHP
<br/>
4. Web Browser - buat melihat atau membuka website


        </p>

        <div className='videoyt'>
        <iframe
          src="https://www.youtube.com/embed/TaBWhb5SPfc"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>





      <div className='btn-next'>
      <button>
        Tutorial Berikutnya
      </button>
      </div>
    

      </article>

      <div class="matrix"></div>

    </div>
  );
};

export default ArticlePage1;
