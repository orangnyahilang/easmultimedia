import React, { useState, useEffect } from 'react';
import './articletemplate.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import php1 from '../../assets/images/php1.png'
import { faAnglesLeft, faArrowUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticlePage1sql = () => {

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
        <h1>Penginstallan dan Setting Dasar MySQL</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>MySQL</b></h2>
        <p>


        MySQL adalah Relational Database Management System (RDBMS) digunakan untuk mengolah data terstruktur. MySQL merupakan salah satu database yang paling banyak digunakan saat ini.

Database merupakan elemen penting dalam aplikasi karena mampu menyimpan data. Data yang tersimpan dapat digunakan kembali untuk berbagai kepentingan seperti ditampilkan, diagregasi, diolah dan sebagainya.

MySQL mampu menyimpan banyak database. Setiap database tersusun oleh table dan setiap table terdiri dari kolom (field) dan baris data (row)

<br/>
<br/>
<img src='https://ngodingdata.com/wp-content/uploads/2019/10/tabledatabase.png' alt=''/>

Cara menjalankan service MySQL
Note : Pastikan anda sudah menginstall XAMPP

Di Windows, Buka XAMPP control panel dan tekan tombol Apache dan MySQL

<br/>
<br/>
<img src='https://ngodingdata.com/wp-content/uploads/2019/10/image-26.png' alt=''/>

Di Linux, ketik sudo /opt/lampp/lampp start

<CodeEditor
        value={
`$ sudo /opt/lampp/lampp start
Starting XAMPP for Linux 7.1.26-1…
XAMPP: Starting Apache…ok.
XAMPP: Starting MySQL…ok.
XAMPP: Starting ProFTPD…ok.`
        }
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        style={{
          backgroundColor: "#",
          width: '50%',
          padding: '5px',
          marginTop: '0.8rem',
          marginBottom: '0.8rem',
          borderRadius: '1rem',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />



Buka browser dan ketik


<CodeEditor
        value={
`http://localhost/phpmyadmin/`
        }
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        style={{
          backgroundColor: "#",
          width: '50%',
          padding: '5px',
          marginTop: '0.8rem',
          marginBottom: '0.8rem',
          borderRadius: '1rem',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />


phpmyadmin adalah client interface untuk mengolah data di MySQL. phpmyadmin memudahkan dalam mengolah database dengan GUI dan tidak harus berurusan dengan kode secara langsung

<br/>
<br/>
<img src='https://ngodingdata.com/wp-content/uploads/2019/10/image-28.png11' alt=''/>

MySQL menggunakan bahasa SQL (Structured Query Language) untuk melakukan operasi data seperti menambah, merubah, menghapus dan sebagainya.

Untuk menggunakan perintah SQL di phpmyadmin dapat menggunakan interface phpmyadmin atau menggunakan kode SQL yang dapat dieksekusi di Menu Tab SQL

<br/>
<br/>
<img src='https://ngodingdata.com/wp-content/uploads/2019/10/image-29.png' alt=''/>

Selain bisa mengakes MySQL melalui phpmyadmin kita juga bisa mengakses melalui terminal / command prompt.

Di Linux, Masuk ke directory /opt/lampp/bin

<CodeEditor
        value={
`cd /opt/lampp/bin/`
        }
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        style={{
          backgroundColor: "#",
          width: '50%',
          padding: '5px',
          marginTop: '0.8rem',
          marginBottom: '0.8rem',
          borderRadius: '1rem',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />

Masuk ke MySQL / MariaDB dengan akses root

<CodeEditor
        value={
`$ ./mysql -u root
Welcome to the MariaDB monitor.  Commands end with ; or \g.
 Your MariaDB connection id is 161
 Server version: 10.1.38-MariaDB Source distribution
 Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.
 Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.
 MariaDB [(none)]>`
        }
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        style={{
          backgroundColor: "#",
          width: '50%',
          padding: '5px',
          marginTop: '0.8rem',
          marginBottom: '0.8rem',
          borderRadius: '1rem',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />

Untuk melihat seluruh database di MySQL

<CodeEditor
        value={
`MariaDB [(none)]> show databases;
+----------------------------+
| Database                   |
+----------------------------+
| dts                        |
| information_schema         |
| inmul                      |
| iot_itb                    |
| iot_rest                   |
| mysql                      |
| ngodingdata                |
| performance_schema         |
| phpmyadmin                 |
| repo                       |
| test                       |
| test_db_login              |
| test_ecommerce_codeigniter |
| toko_mainan                |
+----------------------------+
14 rows in set (0.01 sec)`
        }
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        style={{
          backgroundColor: "#",
          width: '50%',
          padding: '5px',
          marginTop: '0.8rem',
          marginBottom: '0.8rem',
          borderRadius: '1rem',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />

Di Windows, Masuk ke directory c:/xampp

<CodeEditor
        value={
`cd (path)
mysql.exe -u root`
        }
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        style={{
          backgroundColor: "#",
          width: '50%',
          padding: '5px',
          marginTop: '0.8rem',
          marginBottom: '0.8rem',
          borderRadius: '1rem',
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />

Dalam SQL terdapat 5 istilah perintah untuk manipulasi data yaitu:

Data Definition Language (DDL)
Data Manipulation Language (DML)
Data Query Language (DQL)
Data Control Language (DCL)
Transaction Control Language (TCL)

DDL, DML, DQL, DCL, TCL
Data Definition Language (DDL) adalah perintah SQL untuk membuat, merubah atau menghapus struktur database

Data Manipulation Language (DML) adalah perintah SQL untuk manipulasi data dalam table

Data Query Language (DQL) adalah perintah SQL untuk query data

Data Control Language (DCL) adalah perintah SQL untuk kontrol dan permission database

Transaction Control Language (TCL) adalah perintah SQL yang berhubungan dengan transaksi di database


        </p>

        <div className='videoyt'>
        <iframe
          src="https://www.youtube.com/embed/xYBclb-sYQ4?si=bJRGxW5Z8BKpACTI"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>


      <br/>


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

export default ArticlePage1sql;
