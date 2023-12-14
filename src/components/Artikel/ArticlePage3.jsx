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
      <div class="loader">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
      </div>


      <div className='headerartikel'>
        <h1>Function PHP</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>Mengoptimalkan Kode dengan Function:</b></h2>
        <p>
        

Fungsi adalah blok kode yang dapat dipanggil untuk menjalankan tugas tertentu. Pemisahan kode ke dalam fungsi membantu mengorganisir, mendaur ulang, dan mempermudah pemeliharaan kode. Berikut adalah panduan untuk memahami dan menggunakan fungsi dalam PHP.

1. Deklarasi Fungsi
Anda dapat mendeklarasikan fungsi menggunakan kata kunci function. Sebuah fungsi dapat memiliki parameter dan mengembalikan nilai. Contoh:


<CodeEditor
        value={
`function sapa($nama) {
  echo "Halo, $nama!";
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

2. Panggil Fungsi
Setelah fungsi dideklarasikan, Anda dapat memanggilnya di bagian lain dari program atau skrip PHP Anda.


<CodeEditor
        value={
`sapa("John");
// Output: Halo, John!`
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

3. Parameter Fungsi
Fungsi dapat menerima parameter, yang digunakan untuk memberikan nilai ke dalam fungsi.



<CodeEditor
        value={
`function tambah($a, $b) {
  $hasil = $a + $b;
  echo "Hasil penjumlahan: $hasil";
}

tambah(3, 5);
// Output: Hasil penjumlahan: 8`
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



4. Nilai Balik (Return)
Fungsi dapat mengembalikan nilai dengan menggunakan kata kunci return. Nilai ini dapat digunakan di bagian lain dari program.



<CodeEditor
        value={
`function hitung($a, $b) {
  $hasil = $a * $b;
  return $hasil;
}

$hasilPerkalian = hitung(4, 6);
// $hasilPerkalian sekarang bernilai 24`
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
      

      5. Variabel Lokal dan Global
Variabel yang didefinisikan di dalam fungsi hanya dapat diakses di dalam fungsi tersebut (variabel lokal). Untuk mengakses variabel global di dalam fungsi, gunakan kata kunci global.


      <CodeEditor
        value={
`$variabelGlobal = 10;

function contohFungsi() {
  global $variabelGlobal;
  echo $variabelGlobal;
}

contohFungsi();
// Output: 10`
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


6. Fungsi Rekursif
Fungsi rekursif adalah fungsi yang memanggil dirinya sendiri. Ini sering digunakan untuk masalah pemrograman yang dapat dipecahkan dengan cara yang serupa secara berulang.


<CodeEditor
        value={
`function faktorial($n) {
  if ($n <= 1) {
    return 1;
  } else {
    return $n * faktorial($n - 1);
  }
}

$hasilFaktorial = faktorial(5);
// $hasilFaktorial sekarang bernilai 120`
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
      

      7. Fungsi Bawaan PHP
PHP menyediakan berbagai fungsi bawaan yang dapat digunakan langsung, seperti strlen(), strpos(), dan banyak lagi. Dokumentasi resmi PHP berisi informasi rinci tentang fungsi-fungsi ini.

      
<CodeEditor
        value={
`$panjangKata = strlen("Halo");
// $panjangKata sekarang bernilai 4`
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


8. Menangani Parameter Default
Anda dapat memberikan nilai default untuk parameter fungsi. Jika nilai tidak diberikan saat pemanggilan fungsi, nilai default akan digunakan.


<CodeEditor
        value={
`function sapa($nama = "Tamu") {
  echo "Halo, $nama!";
}

sapa();
// Output: Halo, Tamu!`
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


9. Anonymous Functions (Closure)
Anonymous functions, atau disebut juga closure, adalah fungsi tanpa nama yang dapat disimpan dalam variabel atau langsung digunakan.

<CodeEditor
        value={
`$sapa = function($nama) {
  echo "Halo, $nama!";
};

$sapa("Budi");
// Output: Halo, Budi!`
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
Fungsi adalah komponen kunci dalam pemrograman PHP yang membantu Anda mengorganisir kode, meningkatkan keterbacaan, dan mempermudah pemeliharaan. Pahami konsep-konsep dasar ini, dan Anda akan dapat membuat kode PHP yang lebih efisien dan mudah dipelihara. Selalu merujuk pada dokumentasi resmi PHP untuk mendapatkan wawasan lebih lanjut tentang fungsi dan fitur lainnya.


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

export default ArticlePage3;
