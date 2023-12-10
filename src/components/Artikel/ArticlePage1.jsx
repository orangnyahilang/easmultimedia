import React, { useState } from 'react';
import './articletemplate.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import php1 from '../../assets/images/php1.png'

const ArticlePage1 = () => {
  const [code, setCode] = useState(
    ``
  );
  return (
    <div className="article-container">


      <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
      </div>


      <div className='headerartikel'>
        <h1>Pengenalan PHP</h1>
        <p className="meta">Published on Desember 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />
      <article className="article-content">
        <h2><b>Pengenalan PHP:</b></h2>
        <p>
        Apa itu PHP?
PHP adalah singkatan dari "Hypertext Preprocessor". PHP adalah bahasa skrip sisi server yang dirancang khusus untuk pengembangan web, tetapi juga dapat digunakan sebagai bahasa umum pemrograman. PHP memungkinkan Anda menyisipkan kode di dalam dokumen HTML, yang kemudian dieksekusi oleh server web saat halaman diminta.

Keuntungan Penggunaan PHP:

Gratis: PHP adalah perangkat lunak sumber terbuka yang dapat diunduh dan digunakan tanpa biaya.
Fleksibel: PHP bekerja pada berbagai platform dan dapat diintegrasikan dengan berbagai database, seperti MySQL.
Mudah Dipelajari: PHP mudah dipelajari, terutama bagi mereka yang sudah memiliki pemahaman dasar tentang HTML.
Dokumentasi Kuat: PHP memiliki dokumentasi yang baik dan aktif, yang memudahkan pengembang untuk mencari dan memahami fungsi-fungsi yang ada.
<br/>
<br/>
<b>Cara Menggunakan PHP:</b>
<br/>
Penyisipan Kode PHP:

Kode PHP dapat disisipkan di dalam tag HTML menggunakan delimiter (?php dan ?). Contoh:

      <CodeEditor
        value={`<?php\n  echo "Hello, World!";\n?>`}
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

Variabel dan Tipe Data:

Variabel digunakan untuk menyimpan nilai. Tipe data termasuk string, integer, float, boolean, dll. Contoh:

      <CodeEditor
        value={
`$nama = "John";
$umur = 25;
$gaji = 1000.50;
$sudahMenikah = false;`}
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

Digunakan untuk mengulangi blok kode tertentu. Contoh:


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



Pernyataan Percabangan:

Digunakan untuk mengambil keputusan berdasarkan kondisi tertentu. Contoh:

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
      
      Fungsi:

Fungsi digunakan untuk mengelompokkan kode ke dalam blok yang dapat dipanggil kembali. Contoh:

      
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
      

      Penggunaan Formulir:

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


Fungsi:

Fungsi digunakan untuk mengelompokkan kode ke dalam blok yang dapat dipanggil kembali. Contoh:

      
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

        </p>





      <div class="loading-wave">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
      </div>

      </article>
    </div>
  );
};

export default ArticlePage1;
