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
      <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
      </div>


      <div className='headerartikel'>
        <h1>Panduan Penggunaan PHP</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>Memahami Dasar-dasar dan Membangun Aplikasi Web Dinamis:</b></h2>
        <p>
        
PHP (Hypertext Preprocessor) adalah bahasa pemrograman sisi server yang sangat populer untuk pengembangan web dinamis. Dengan PHP, Anda dapat membuat halaman web yang responsif, berinteraksi dengan pengguna, dan berkomunikasi dengan basis data. Artikel ini akan memberikan panduan pengguna dasar untuk memulai dengan PHP.

1. Pemasangan PHP
Sebelum memulai pengembangan PHP, pastikan Anda telah menginstal PHP di server atau mesin lokal Anda. Ikuti langkah-langkah pemasangan PHP sesuai dengan sistem operasi yang Anda gunakan. Anda dapat mengunduh versi PHP terbaru dari situs resmi (https://www.php.net/).

2. Struktur Dasar PHP
Setelah PHP terpasang, Anda dapat mulai membuat skrip PHP di dalam file HTML. Tag PHP dimulai dengan ?php dan diakhiri dengan ?. Contoh sederhana:


<CodeEditor
        value={
`<?php
echo "Halo, dunia!";
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
3. Variabel dan Tipe Data
Dalam PHP, Anda menggunakan tanda $ untuk mendeklarasikan variabel. Tipe data dapat berupa string, integer, float, boolean, dan lainnya.


<CodeEditor
        value={
`$nama = "John";
$umur = 25;
$tinggi = 175.5;
$sudahMenikah = false;`
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

4. Operasi Dasar
PHP mendukung operasi aritmatika, pembanding, dan logika. Contoh:


<CodeEditor
        value={
`$a = 5;
$b = 10;

$hasilTambah = $a + $b;
$hasilPembanding = ($a == $b);
$hasilLogika = ($a < $b) && ($b > 0);`
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



5. Struktur Kontrol
Pernyataan percabangan dan perulangan memungkinkan Anda mengendalikan alur program.

Pernyataan Percabangan:


<CodeEditor
        value={
`$umur = 18;
if ($umur >= 18) {
  echo "Anda sudah dewasa.";
} else {
  echo "Anda masih anak-anak.";
}`
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
      

      Perulangan:

      <CodeEditor
        value={
`for ($i = 1; $i <= 5; $i++) {
    echo "Iterasi ke-$i <br>";
  }`
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


6. Fungsi
Fungsi memungkinkan Anda mengelompokkan blok kode yang dapat dipanggil kembali.

<CodeEditor
        value={
`function sapa($nama) {
    echo "Halo, $nama!";
  }
  
  sapa("Budi");`
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
      

      7. Penggunaan Formulir:

PHP dapat digunakan untuk memproses data formulir yang dikirim dari halaman HTML. Contoh:
      
<CodeEditor
        value={
`<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = $_POST["nama"];
  echo "Halo, $nama!";
}
?>
<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
Nama: <input type="text" name="nama">
<input type="submit" value="Submit">
</form>`
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


8. Koneksi ke Database
PHP dapat digunakan untuk berinteraksi dengan database, seperti MySQL.


<CodeEditor
        value={
`$servername = "localhost";
$username = "username";
$password = "password";
$database = "nama_database";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}`
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


Kesimpulan
Panduan pengguna PHP di atas mencakup dasar-dasar yang diperlukan untuk memulai pengembangan web dengan PHP. Teruslah belajar, eksperimen dengan kode, dan manfaatkan sumber daya online seperti dokumentasi resmi PHP untuk memperdalam pengetahuan Anda. Dengan menguasai dasar-dasar ini, Anda dapat membangun aplikasi web yang dinamis dan responsif.




        </p>





      <div class="loading-wave">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
      </div>

      </article>

      <div class="matrix"></div>

    </div>
  );
};

export default ArticlePage2;
