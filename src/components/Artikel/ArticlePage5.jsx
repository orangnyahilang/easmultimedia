import React, { useState, useEffect } from 'react';
import './articletemplate.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import php1 from '../../assets/images/php1.png'
import { faAnglesLeft, faArrowUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticlePage5 = () => {

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
        <h1>Operator di PHP</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>7 Jenis Operator dalam PHP yang Harus diketahui</b></h2>
        <p>
        Ada yang tanya:

Apakah saya harus jago matematika untuk bisa jadi programmer?

Jawabannya:

Tidak, karena untuk belajar dasar pemrograman…

…kita tidak harus jago matematika.

Bahkan teman saya yang jurusan ilmu matematika juga tidak bisa coding. Meskipun mereka juga belajar bahasa pemrograman seperti Pascal dan Matlab.

Dengan mengetahui dasar-dasar matematika saja sudah cukup sebagai bekal untuk belajar pemrograman.

Salah satunya adalah ilmu tentang operasi bilangan dan logika.

Pada pemrograman, ini kita kenal dengan operator.

Operator adalah simbol-simbol yang digunakan untuk melakukan operasi terhadap suatu nilai dan variabel.
<br/>
<br/>
Ada 6 Jenis operator dalam pemrograman PHP yang harus kita ketahui:
<br/>
1. Operator Aritmatika;
<br/>
2. Operator Penugasan atau Assignment;
<br/>
3. Operator Increment & Decrement;
<br/>
4. Operator Relasi atau pembanding;
<br/>
5. Operator Logika;
<br/>
6. Operator Bitwise;
<br/>
7. Operator Ternary.
<br/>
Mari kita bahas satu persatu…
<br/><br/>
<strong>1. Operator Aritmatika</strong>
<br/>
Operator aritmatika merupakan operator untuk melakukan operasi aritmatika.
<br/>
Operator aritmatika terdiri dari:
<br/>
Penjumlahan	+
<br/>
Pengurangan	-
<br/>
Perkalian	*
<br/>
Pemangkatan	**
<br/>
Pembagian	/
<br/>
Sisa Bagi	%

      <CodeEditor
        value={`<?php

        $a = 5;
        $b = 2;
        
        // penjumlahan
        $c = $a + $b;
        echo "$a + $b = $c";
        echo "<hr>";
        
        // pengurangan
        $c = $a - $b;
        echo "$a - $b = $c";
        echo "<hr>";
        
        // Perkalian
        $c = $a * $b;
        echo "$a * $b = $c";
        echo "<hr>";
        
        // Pembagian
        $c = $a / $b;
        echo "$a / $b = $c";
        echo "<hr>";
        
        // Sisa bagi
        $c = $a % $b;
        echo "$a % $b = $c";
        echo "<hr>";
        
        // Pangkat
        $c = $a ** $b;
        echo "$a ** $b = $c";
        echo "<hr>";
        
        ?>`}
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

<strong>2. Operator Penugasan</strong>
<br/>
Operator berikutnya yang harus kamu ketahi adalah operator penugasan atau assignment.

Yap! dari namanya saja sudah bisa ditebak.

Operator ini adalah operator untuk memberikan tugas kepada variabel.

Biasanya digunakan untuk mengisi nilai.
<br/>
Contoh:
      <CodeEditor
        value={
`$a = 32;`}
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

Sama dengan (=) adalah operator penugasan untuk mengisi nilai.

Selain sama dengan, terdapat juga beberapa orpeator penugasan seperti:
<br/>
<br/>
1. Pengisian Nilai	=
<br/>
2. Pengisian dan Penambahan	+=
<br/>
3. Pengisian dan Pengurangan	-=
<br/>
4. Pengisian dan Perkalian	*=
<br/>
5. Pengisian dan Pemangkatan	**=
<br/>
6. Pengisian dan Pembagian	/=
<br/>
7. Pengisian dan Sisa bagi	%=
<br/>
8. Pengisian dan Peggabungan (string)	.=
<br/><br/>
Apa bedanya dengan operator aritmatika?

Operator penugasan digunakan untuk mengisi nilai dan juga menghitung dengan operasi aritmatika. Sedangkan operator aritmatika hanya berfungsi untuk menghitung saja.
<br/>
Sebagai contoh:


<CodeEditor
        value={
`$speed = 83;

// ini opertor aritmatika
$speed = $speed + 10;

// maka nilai speed akan samadengan 83 + 10 = 93

// ini operator penugasan
$speed += 10;

// sekarang nilai speed akan menjadi 93 + 10 = 103`
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


Output:

<br/>
<br/>
<img src='https://www.petanikode.com/img/php/operator/operator-penugasan-aritmatika.png' alt=''/>
<br/>
Perhatikan operasi ini:
<br/>
Kedua operasi tersebut merupakan opearsi yang sama. Hanya saja yang atas menggunakan operator aritmatika dan yang bawah menggunakan operator penugasan.

Bisa dibilang, operator penugasan adalah bentuk yang lebih sederhana dari ekspresi seperti di atas.

Penggunaan opereator penugasan akan sering kita temukan saat membuat program.
<br/><br/>
<strong>3. Opeartor Increment & Decrement</strong>
<br/>
Operator increment dan decrement merupakan operator yang digunakan untuk menambah +1 (tambah satu) dan mengurangi -1 (kurangi dengan satu).

Opertor increment menggunakan simbol ++, sedangkan decrement menggunakan simbol --.
<br/>
Contoh:



<CodeEditor
        value={
`$score = 0;

$score++;
$score++;
$score++;

echo $score;`
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
      
      Output:


<br/>
<img src='https://www.petanikode.com/img/php/operator/increment.png' alt=''/>

Nilai $score akan menjadi 3, karena kita melakukan increment sebanyak 3x.
<br/><br/>
<strong>4. Operator Relasi</strong>
<br/>
Operator relasi adalah operator untuk membandingkan dua buah nilai.

Hasil operasi dari operator relasi akan menghasilkan nilai dengan tipe data boolean, yaitu true (benar) dan false (salah).
<br/>
Berikut ini daftar operator relasi:
<br/><br/>
1. Lebih Besar	&gt;
<br/>
2.Lebih Kecil	&lt;
<br/>
3. Sama Dengan	== atau ===
<br/>
4. Tidak Sama dengan	!= atau !==
<br/>
5. Lebih Besar Sama dengan	&gt;=
<br/>
6. Lebih Kecil Sama dengan	&lt;=
<br/>
Mari kita coba dalam program: relasi.php

 
<CodeEditor
        value={
`<?php

$a = 6;
$b = 2;

// menggunakan operator relasi lebih besar
$c = $a > $b;
echo "$a > $b: $c";
echo "<hr>";

// menggunakan operator relasi lebih kecil
$c = $a < $b;
echo "$a < $b: $c";
echo "<hr>";

// menggunakan operator relasi lebih sama dengan
$c = $a == $b;
echo "$a == $b: $c";
echo "<hr>";

// menggunakan operator relasi lebih tidak sama dengan
$c = $a != $b;
echo "$a != $b: $c";
echo "<hr>";

// menggunakan operator relasi lebih besar sama dengan
$c = $a >= $b;
echo "$a >= $b: $c";
echo "<hr>";

// menggunakan operator relasi lebih kecil sama dengan
$c = $a <= $b;
echo "$a <= $b: $c";
echo "<hr>";`
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
<img src='https://www.petanikode.com/img/php/operator/relasi.png' alt=''/>

<strong>5. Operator Logika</strong>
<br/>
Jika kamu pernah belajar logika matematika, kamu pasti tidak akan asing dengan operator ini.

Operator logika adalah operator untuk melakukan operasi logika seperti AND, OR, dan NOT.
<br/>
Operator logika terdiri dari:
<br/>
1. Logika AND	&&
<br/>
2. Logika OR	||
<br/>
3. Negasi/kebalikan/ NOT	!
<br/><br/>
Mari kita coba dalam program: logika.php


<CodeEditor
        value={
`<?php

$a = true;
$b = false;

// variabel $c akan bernilai false
$c = $a && $b;
printf("%b && %b = %b", $a,$b,$c);
echo "<hr>";

// variabel $c akan bernilai true
$c = $a || $b;
printf("%b || %b = %b", $a,$b,$c);
echo "<hr>";

// variabel $c akan bernilai false
$c = !$a;
printf("!%b = %b", $a, $c);
echo "<hr>";`
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
<img src='https://www.petanikode.com/img/php/operator/logika.png' alt=''/>
      
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

export default ArticlePage5;
