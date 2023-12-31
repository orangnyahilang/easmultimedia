import React, { useState, useEffect } from 'react';
import './articletemplate.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import php1 from '../../assets/images/php1.png'
import { faAnglesLeft, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticlePage4 = () => {

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
        <h1>Mengenal Tipe Data dan variabel di PHP</h1>
        <p className="meta">Published on December 10, 2023 by Team</p>
      </div>
      <img
        src={php1}
        alt="Article Illustration"
      />

      <div class="fourloader"></div>

      <article className="article-content">
        <h2><b>5 Hal Dasar yang Harus diketahui tentang Variabel dan Tipe Data</b></h2>
        <p>
        

        Apa kamu pernah menemukan x dan y dalam perlajaran matematika?

Mereka berdua sebenarnya adalah variabel yang menyimpan sesuatu.

Kadang, kita sering diberi tugas untuk mencari tahu isi dari x dan y.
<br/>
Contohnya:
<br/>
jika x + 3 = 5, Berapakah x?
Variabe dalam pemrograman juga memiliki arti yang sama seperti dalam matematika.

Variabel adalah tempat kita menyimpan nilai sementara.

Variabel akan ada selama program dijalankan. Namun kita juga bisa menghapusnya dari memori.

Nanti kita akan pelajari caranya.

Jadi, pada artikel ini kamu akan belajar:
<br/>
<br/>

1. Cara membuat variabel dan menyimpan nilai di sana
<br/>
2. Cara mengambil nilai dari variabel
<br/>
3. Mengenal tipe data apa saja yang dapat disimpan di dalam variabel
<br/>
4. Konversi tipe data
<br/>
5. Menghapus variabel dari memori
<br/>
<br/>
Mari kita mulai…
<br/>
<br/>
<strong>1. Membuat Variabel di PHP</strong>
<br/>

Pada PHP, kita membuat variabel dengan tanda dolar ($), lalu diikuti dengan nama variabelnya serta nilai yang ingin kita simpan.
<br/>
Contoh:



<CodeEditor
        value={
`<?php

$harga = 1000;`
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

Kita baru saja membuat variabel bernama $harga dengan isi 1000.

Tanda sama dengan (=) adalah simbol atau operator yang digunakan untuk mengisi nilai ke variabel.

Mudah bukan?

Mari kita coba contoh yang lain:


<CodeEditor
        value={
`<?php

$nama_barang = "Kopi C++";
$harga = 4000;
$stok = 40;`
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

Dalam membuat nama variabel ada beberapa hal yang harus diperhatikan:

Awal dari nama variabel tidak boleh menggunakan angka dan simbol, kecuali underscore.

Nama variabel yang terdiri dari dua suku kata, bisa dipisah dengan underscore (_) atau menggunakan style camelCase.
<br/>
Contoh:



<CodeEditor
        value={
`$nama_barang = "Buku PHP";
$namaPembeli = "Petani Kode"; // <-- menggunakan camelCase`
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



Variabel harus diisi saat pembuatannya. Bila kita tidak ingin mengisi, cukup isi dengan nilai kosong.
<br/>
Contoh:



<CodeEditor
        value={
`$nama_barang = "";
$namaPembeli = "";
$harga = 0;`
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
      

        <br/>
      Variabel Lokal dan Global
      <br/>
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


Nama variabel bersifat Case Sensitive, artinya huruf besar dan huruf kecil dibedakan.
<br/>
Contoh: Tiga variabel ini akan dianggap berbeda.

<br/>

<CodeEditor
        value={
`$Belajar = "";
$BELAJAR = "";
$belajar = "";`
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
      
<br/>
      <strong>2. Mengambil Nilai dari Variabel</strong>
      <br/>
Setelah kita membuat variabel, biasanya akan kita gunakan pada proses berikutnya dengan mengambil nilainya.

Ya iya lah, masak cuma dibuat saja dan tidak digunakan.

Mengambil nilai dari variabel bisa kita lakukan dengan menuliskan namanya dalam perintah echo maupun ekspresi yang lain.
<br/>
Contoh:
      
<CodeEditor
        value={
`<?php

// membuat variabel baru
$nama_barang = "Minyak Goreng";
$harga = 15000;

// menampilkan isi variabel
echo "Ibu membeli $nama_barang seharga Rp $harga";`
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
  Hasilnya :
<br/>
<br/>
<img src='https://www.petanikode.com/img/php/var/membuat-var.png' alt=''/>

<strong>3. Mengenal Tipe Data di PHP</strong>
<br/>
Variabel yang sudah kita buat bisa kita simpan dengan berbagai jenis data.

Jenis-jenis data ini disebut tipe data.
<br/>
<br/>
Ada beberapa macam tipe data yang dapat disimpan dalam variabel:
<br/>
1. Tipe data char (karakter)
<br/>
2. Tipe data string (teks)
<br/>
3. Tipe data integer (angka)
<br/>
4. Tipe data float (pecahan)
<br/>
5. Tipe data boolean
<br/>
6. Tipe data objek
<br/>
7. Tipe data Array
<br/>
8. NULL
<br/>
<br/>
PHP PHP, kita tidak harus mendeklarasikan tipe datanya secara eksplisit. Karena PHP sudah mampu mengenali tipe data dari nilai yang kita berikan.

Contoh:

<CodeEditor
        value={
`<?php

// tipe data char (karakter)
$jenis_kelamin = 'L';

// tipe data string (teks)
$nama_lengkap = "Petani Kode";

// tipe data integer
$umur = 20;

// tipe data float
$berat = 48.3;

// tipe data float
$tinggi = 182.2;

// tipe data boolean
$menikah = false;

echo "Nama: $nama_lengkap<br>";
echo "Jenis Kelamin: $jenis_kelamin<br>";
echo "Umur: $umur tahun<br>";
echo "berat badan: $berat kg<br>";
echo "tinggi badan: $tinggi cm<br>";
echo "menikah: $menikah";`
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


Hasilnya :
<br/>
<br/>
<img src='https://www.petanikode.com/img/php/var/tipe-data.png' alt=''/>

Variabel <strong>$menikah</strong> akan ditampilkan kosong, karena nilai false akan dikonversi menjadi kosong dalam string.

Nanti kita akan bahas cara konversi tipe data di PHP.

Sekarang mari kita bahas masing-masing tipe data lebih detail…
<br/><br/>
Tipe Data Char dan String di PHP
Char adalah tipe data yang terdiri dari karakter. Penulisannya diapit dengan tanda petik satu.
Lalu, String adalah tipe data yang terdiri dari kumpulan karakter. Penulisannya diapit dengan tanda petik ganda.
<br/><br/>
Tipe Data Integer di PHP
Integer adalah tipe data angka. Penulisanya tidak menggunakan tanda petik.
<br/><br/>
Tipe Data Float di PHP
Float adalah tipe data bilangan pecahan. Sama seperti integer, tipe data ini ditulis tanpa tanda petik.
<br/><br/>
Tipe data Boolean di PHP
Tipe data boolean adalah tipe data yang hanya bernilai ture dan false.

Penulisan true dan false tidak diapit dengan tanda petik.
<br/><br/>
Tipe Data Array dalam PHP
Array adalah tipe data yang berisi sekumpulan data.
<br/><br/>
Tipe Data Objek di PHP
Tipe data objek adalah tipe data abstrak yang berisi data dan method.

Tipe data objek lebih sering disebut instance dari sebuah class. Pada contoh di atas User() adalah class yang di-instance di variabel $user.
<br/><br/>
Tipe Data NULL di PHP
Tipe data NULL adalah tipe data yang menyatakan kosong.
<br/>
Artinya: Jika kita mengisi variabel dengan nilai NULL, maka variabel tersebut akan dianggap kosong atau tidak punya nilai.


        </p>





      </article>

      <div class="matrix"></div>

    </div>
  );
};

export default ArticlePage4;
