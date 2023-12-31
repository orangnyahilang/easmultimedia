import React, { useState, useEffect } from 'react';
import './articletemplate.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import php1 from '../../assets/images/php1.png'
import { faAnglesLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticlePage6 = () => {

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
        <h1>Mengenal Prosedur dan Fungsi PHP</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>Prosedur dan Fungsi</b></h2>
        <p>
        
        Banyak fungsi build-in dari php yang sering kita gunakan, seperti print(), print_r(), unset(), dll. Selain fungsi-fungsi tersebut, kita juga dapat membuat fungsi sendiri sesuai kebutuhan.

        Fungsi adalah sekumpulan intruksi yang dibungkus dalam sebuah blok. Fungsi dapat digunakan ulang tanpa harus menulis ulang instruksi di dalamnya.

Fungsi pada PHP dapat dibuat dngan kata kunci function, lalu diikuti dengan nama fungsinya.

Contoh:


<CodeEditor
        value={
`function perkenalan(){
  echo "Assalamulaikmu, ";
  echo "Perkenalkan, nama saya Ardianta<br/>";
  echo "Senang berkenalan dengan anda<br/>";
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
Fungsi yang sudah dibuat tidak akan menghasilkan apapun kalau tidak dipanggil. Kita dapat memanggil fungsi dengan menuliskan namanya.

Jadi, kode lengkapnya seperti ini:


<CodeEditor
        value={
`<?php
// mmbuat fungsi
function perkenalan(){
  echo "Assalamulaikmu, ";
  echo "Perkenalkan, nama saya Ardianta<br/>";
  echo "Senang berkenalan dengan anda<br/>";
}

// memanggil fungsi yang sudah dibuat
perkenalan();

echo "<hr>";

// memanggilnya lagi
perkenalan();
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

Hasilnya:
      <br/>
<br/>
<img src='https://3.bp.blogspot.com/-1y4-C_3IUMo/VQAlU3fyEwI/AAAAAAAABgk/mN2EI5SQAL4/s1600/output%2Bfungsi%2Bperkenalan.png' alt=''/>
<br/>
<strong>Fungsi dengan Parameter</strong>
<br/>
Supaya intruksi yang di dalam fungsi lebih dinamis, kita dapat menggunakan parameter untuk memasukkan sebuah nilai ke dalam fungsi. Nilai tersebut akan diolah di dalam fungsi.

Misalkan, pada contoh fungsi yang tadi, tidak mungkin nama yang dicetak adalah ardianta saja dan salam yang dipakai tidak selalu assalamualaikum. Maka, kita dapat menambahkan parameter menjadi seperti ini:


<CodeEditor
        value={
`<?php
// mmbuat fungsi
function perkenalan($nama, $salam){
  echo $salam.", ";
  echo "Perkenalkan, nama saya ".$nama."<br/>";
  echo "Senang berkenalan dengan anda<br/>";
}

// memanggil fungsi yang sudah dibuat
perkenalan("Muhardian", "Hi");

  echo "<hr>";

  $saya = "Indry";
  $ucapanSalam = "Selamat pagi";
  // memanggilnya lagi
  perkenalan($saya, $ucapanSalam);
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


Hasilnya:
      <br/>
<br/>
<img src='https://1.bp.blogspot.com/-ijTlKsYY1m4/VQAlgKCdieI/AAAAAAAABgs/Fq9qcbWiUwc/s1600/output%2Bfungsi%2Bdngan%2Bparameter.png' alt=''/>
<br/>

<strong>Parameter dengan Nilai Default</strong>
<br/>
Nilai default dapat kita berikan di parameter. Nilai default berfungsi untuk mengisi nilai sebuah parameter, kalau parameter tersebut tidak diisi nilainya.

Misalnya: saya lupa mengisi parameter salam, maka program akan error. Oleh karena itu, kita perlu memberikan nilai default supaya tidak error.
<br/>
Contoh:



<CodeEditor
        value={
`<?php
// mmbuat fungsi
function perkenalan($nama, $salam="Assalamualaikum"){
  echo $salam.", ";
  echo "Perkenalkan, nama saya ".$nama."<br/>";
  echo "Senang berkenalan dengan anda<br/>";
}

// memanggil fungsi yang sudah dibuat
perkenalan("Muhardian", "Hi");

echo "<hr>";

$saya = "Indry";
$ucapanSalam = "Selamat pagi";
// memanggilnya lagi tanpa mengisi parameter salam
perkenalan($saya);
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
      


      Hasilnya:
      <br/>
<br/>
<img src='https://3.bp.blogspot.com/-RBpZvatAD-4/VQAlqcDxBzI/AAAAAAAABg0/Ex0XkTbyMws/s1600/parameter%2Bdefault%2Bfungsi%2Bdi%2Bphp.png' alt=''/>
<br/>

<strong>Fungsi yang Megembalikan Nilai</strong>
<br/>
Hasil pengolahan nilai dari fungsi mungkin saja kita butuhkan untuk pemrosesan berikutnya. Oleh karena itu, kita harus membuat fungsi yang dapat mengembalikan nilai.

Pengembalian nilai dalam fungsi dapat menggunakan kata kunci return.

Memanggil Fungsi di dalam Fungsi
Fungsi yang sudah kita buat, dapat juga dipanggil di dalam fungsi lain.
<br/>
Contoh:


      <CodeEditor
        value={
`<?php
// membuat fungsi
function hitungUmur($thn_lahir, $thn_sekarang){
  $umur = $thn_sekarang - $thn_lahir;
  return $umur;
}

function perkenalan($nama, $salam="Assalamualaikum"){
  echo $salam.", ";
  echo "Perkenalkan, nama saya ".$nama."<br/>";
  // memanggil fungsi lain
  echo "Saya berusia ". hitungUmur(1994, 2015) ." tahun<br/>";
  echo "Senang berkenalan dengan anda<br/>";
}


// memanggil fungsi perkenalan
perkenalan("Ardianta");

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


Hasilnya:
      <br/>
<br/>
<img src='https://2.bp.blogspot.com/-pz-LBoHVcXQ/VQAl3YAGdqI/AAAAAAAABg8/CYCK_Njq5u8/s1600/fungsi%2Bdengan%2Bnilai%2Bkembalian.png' alt=''/>
<br/>

<strong>Fungsi rekursif</strong>
<br/>
Fungsi rekursif adalah fungsi yang memanggil dirinya sendiri. Fungsi ini biasanya digunakan untuk menyelesaikan masalah sepeti faktorial, bilangan fibbonaci, pemrograman dinamis, dll.
<br/>
Contoh fungsi rekursif:


<CodeEditor
        value={
`<?php

function faktorial($angka) {
  if ($angka < 2) {
    return 1;
  } else {
  // memanggil dirinya sendiri
  return ($angka * faktorial($angka-1));
  }
}

// memanggil fungsi
echo "faktorial 5 adalah " . faktorial(5);

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
      

      Hasilnya:
      <br/>
<br/>
<img src='https://2.bp.blogspot.com/-KRYcEad1QJ4/VQAmIptAHuI/AAAAAAAABhM/0VPSg1iaMXY/s1600/fungsi%2Brekursif%2Bdi%2Bphp.png' alt=''/>
<br/>
      

        </p>






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

export default ArticlePage6;
