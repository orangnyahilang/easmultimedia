import React, { useState, useEffect } from 'react';
import './articletemplate.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import php1 from '../../assets/images/php1.png'
import { faAnglesLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticlePage3 = () => {

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
        <h1>Struktur Dasar PHP</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>Struktur</b></h2>
        <p>
        

        Ini adalah contoh program PHP yang paling sederhana.

Program tersebut hanya berfungsi untuk menampilkan teks Hello World saja.

Tapi…

Apa maksudnya &lt;?php dan ?&gt;

Apa itu echo?

…dan kenapa harus ditulis seperti itu?

Jia kamu baru awal-awal belajar pemrograman, mungkin akan menanyakan hal tersebut.

Ini wajar.

Karena saya juga dulu seperti itu.

Karena itu…untuk menjawab semua pertanyaan tersebut, kita harus memahami sintak dasar PHP.

Apa itu sintak?

Sintak adalah aturan penulisan kode program.

Pada dasarnya setiap bahasa pemrograman itu sama, yang membedakan adalah sintak dan fitur.
<br/>
<br/>
<strong>Stuktur Program PHP yang Paling Dasar</strong>
<br/>
Ini adalah bentuk paling dasar program PHP:


<CodeEditor
        value={
`<?php

echo "Hello World!";`
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

Tutup sebenarnya bersifat opsional. Tutup program dibutuhkan saat kita menggabungkan kode PHP dengan HTML.
<br/>
<br/>
<strong>Menulis Kode HTML dan PHP</strong>
<br/>
Saat kita menulis kode PHP di dalam HTML, maka wajib hukumnya membuat tutup program.
<br/>

Contoh:

<CodeEditor
        value={
`<!DOCTYPE html>
<html>
    <head>
        <title><?php echo "Belajar PHP" ?></title>
    </head>
    <body>
        <?php
            echo "saya sedang belajar PHP<br>";
            echo "<p>Belajar PHP hingga jadi master</p>";
        ?>
    </body>
</html>`
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

Apa yang akan terjadi bila kita menghapus tutup PHP (?&gt;)?

Tentunya program akan error.

Oya, PHP yang ditulis di dalam HTML, filenya harus disimpan dengan ekstensi .php bukan .html meskipun isinya HTML dan PHP.

Lalu ada juga yang menulis seperti ini:


<CodeEditor
        value={
`<?php

echo "<html>";
echo "<head>";
echo "<title>Judul Web</title>";
echo "</head>";
echo "<body>";
echo "<h1>Selamat datang</h1>";
echo "</body>";
echo "</html>";`
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



Nah kalau yang ini bisa tidak ditutup, karena kode HTML-nya ditulis di dalam sintak PHP.

Masih bingung?
<br/>
<br/>
<strong>Penulisan Statement dan Ekspresi</strong>
<br/>

Statement dan ekspersi adalah intruksi yang akan diberikan ke komputer. Setiap statement dan ekspresi di PHP harus diakhiri dengan titik koma (;).


<CodeEditor
        value={
`<?php
echo "ini statement 1";
echo "ini statement 2";
$a = $b + $c;`
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

Gimana kalau kita lupa menuliskan titik koma?

Ya tentu programnya akan error.
<br/>
<br/>
<strong>Aturan Penulisan Case PHP</strong>
<br/>
PHP adalah bahasa pemrograman yang bersifat case sensitive. Artinya, huruf besar (kapital) dan huruf kecil akan dibedakan.
<br/>
Contoh:



      <CodeEditor
        value={
`<?php

$nama = "petanikode";
$NAMA = "dian";

?>`
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


Variabel $nama dan $NAMA adalah dua variabel yang berbeda. Mereka tidak sama.

Penulisan huruf besar dan kecil dalam program harus diperhatikan, karena bisa menyebabkan error bila salah.

Saya sering menemukannya, banyak yang salah tulis.

Contoh:


<CodeEditor
        value={
`$umur = 19;

echo "Umur saya adalah $Umur";`
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
      

      Pada kode diatas, kita membuat variabel $umur dengan huruf kecil. Lalu saat menggunakan variabel kita menggunakan $Umur.

Jelas sekali ini akan menyebabkan error.

Untuk menghindari ini, kita harus konsisten dalam penamaan variabel dan konstanta.

Gunakan nama variabel dengan huruf kecil saja dan konstanta dengan huruf kapital.
<br/>
Contoh:      
<CodeEditor
        value={
`const INI_KONSTANTA = 123;
$ini_variabel = 23;
$iniJugaVariabel = 49;`
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


Ini namanya camelCase.

Jika variabel terdiri dari dua atau lebih suku kata, maka kita bisa memisahnya dengan huruf kapital atau bisa juga dengan garis bawah (undescore).



        </p>


        <div className='videoyt'>
        <iframe
          src="https://www.youtube.com/embed/9gpAJPWD-xI?si=eHXJ6BxgFMp8vT5b"
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

export default ArticlePage3;
