import React, { useState, useEffect } from 'react';
import './articletemplate.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import php1 from '../../assets/images/php1.png'
import { faAnglesLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticlePage2 = () => {

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
        <h1>Pemrograman PHP di Windows dengan XAMPP</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>Pemrograman PHP di Windows dengan XAMPP</b></h2>
        <p>
        

        Pada dasarnya, kita membutuhkan alat-alat ini untuk bisa mulai coding PHP:
<br/>
<br/>
Teks Editor;
<br/>
Web Browser;
<br/>
Web Server;
<br/>
PHP itu sendiri.
<br/>
<br/>
Nah, pada pembahasan kali ini.. kita akan fokus mempersiapkan web server dan PHP. Untuk teks editor dan browser, kamu bisa baca di tulisan yang berbeda:

PHP adalah bahasa pemrograman yang berjalan di server, karena itu kita membutuhkan sebuah web server.

Webserver di windows bisa dibuat dengan berbagai macam cara. Ada yang menggunakan PHP secara manual dengan web server bawaan PHP; ada yang menggunakan WSL lalu menginstal LAMPP Stack; ada yang menggunakan XAMPP; ada yang menggunakan Docker, dan lain sebgainya.

Namun, intinya kita hanya perlu menyiapkan web server sebagai tempat PHP dijalankan.

Pada tutorial ini, kita akan menggunakan XAMPP.

Siap?

Mari kita mulai..
<br/>
<br/>
<strong>Apa itu XAMPP?</strong>
<br/>
XAMPP adalah program untuk membuat server. XAMPP menyediakan paket server yang kita butuhkan untuk pengembangan web dengan PHP. Mulai dari PHP, MySQL, PHPmyadmin, dll.
<br/>
<br/>
<img src='https://www.petanikode.com/img/xampp-windows/isi-xampp.avif' alt=''/>
XAMPP merupakan singkatan dari X (cross-platform), Apache, MySQL atau MariaDB, PHP, Perl. Huruf X di XAMPP memiliki makna cross-platform yang artinya XAMPP bisa digunakan di berbagai sistem operasi seperti Linux, Windows, dan MacOS.
<br/>
<br/>
<strong>Cara Install XAMPP di Windows</strong>
<br/>
Pertama, silahkan download XAMPP di website resminya.
<br/>
<br/>
<img src='https://www.petanikode.com/img/xampp-windows/download-xampp.avif' alt=''/>
Setelah itu, kita akan mendapatkan file installer dari XAMPP. Silahkan klik 2x file tersebut.

…klik saja OK.
<br/>
Berikutnya, klik Next.
<br/>
<br/>
<img src='https://www.petanikode.com/img/xampp-windows/setup-xampp.avif' alt=''/>
<br/>
Berikutnya XAMPP akan meminta kita untuk menentukan komponen apa saja yang ingin diinstal. Centang saja semuanya seperti gambar di bawah ini. Lalu klik Next.
<br/>
Berikutnya, kita akan diminta untuk menentukan lokasi penginstalan. Biarkan saja di C:\xampp, setelah itu klik Next.
<br/>
<br/>
<img src='https://www.petanikode.com/img/xampp-windows/xampp-install-path.avif' alt=''/>
<br/>
Berikutnya, hilangkan centang pada Learn more about Bitnami for XAMPP dan klik Next.
<br/>

Berikunya, jika muncul pemblokiran dari Firewall, klik saja Allow Access.
<br/>
<br/>
<img src='https://www.petanikode.com/img/xampp-windows/xampp-windows-firewall.avif' alt=''/>
<br/>
Selesai, klik Finish untuk mengakhiri.
<br/>
<br/>
<strong>Manajemen Server XAMPP</strong>
<br/>
Kita bisa memanajemen server dengan mudah melalui Control Panel XAMPP.
<br/>
<br/>
<img src='https://www.petanikode.com/img/xampp-windows/xampp-control-panel-windows-10.avif' alt=''/>
<br/>
Pada Control Panel ini, kita bisa menyalakan dan mematikan, melakukan konfigurasi, memantau log, menjalankan shell, dan lain-lain.

Untuk percobaan, coba klik tombol Start pada Apache dan MySQL. Sehingga statusnya akan menjadi running.

Apache adalah webserver untuk menjalankan PHP dan MySQL adalah database server untuk menjalankan MySQL.

Jika ada warna hijau dan ada nilai PID dan Port.. maka artinya server sudah berjalan. Tinggal kita pakai saja.
<br/>
<br/>
<strong>Apa itu PID dan Port?</strong>
<br/>
PID adalah process ID, merupakan nomer proses yang dipakai pada taks manager
Port adalah nomer port yang akan dipakai untuk mengakses server.
Nomer Port ini perlu kamu perhatikan, karena bisa jadi nomer port tersebut sudah dipakai oleh service yang lain.

Biasanya apache akan menggunakan nomer port 80, 443 dan MySQL akan menggunakan nomer port 3306.



        </p>


        <div className='videoyt'>
        <iframe
          src="https://www.youtube.com/embed/MlwfLyz8AjY?si=c3IaaVBWKgDua-XK"
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

export default ArticlePage2;
