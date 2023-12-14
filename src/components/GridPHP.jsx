import React from 'react';
import './grid.css';


function GridPHP() {

    const industry = require('../assets/images/industry.png'); 
    const coding = require('../assets/images/jasa.jpg'); 

  return (
    <>
    <div className='header'>
        <h1>Alasan Kenapa Mahasiswa Informatika Wajib Mempelajari Bahasa Pemrograman PHP</h1>
    </div>
    <div class="angry-grid">
        <div id="item-0">
            <h2>Pengembangan Web <span style={{fontWeight: '800'}}>Dinamis.</span></h2>
            <p>PHP memungkinkan mahasiswa membuat situs web dinamis dan interaktif.</p>
        </div>
        <div id="item-1">
            <h2>Permintaan tinggi di <span>Industri.</span></h2>
            <p>lebih meningkatkan peluang di pasar kerja. pemrograman web yang paling populer dan banyak digunakan di industri.</p>
            <img className='industry' src={industry} alt="" />
        </div>
        <div id="item-2">
            <h2><span>Integrasi</span> dengan Framework Modern</h2>
            <p>PHP digunakan dalam framework seperti Laravel untuk pengembangan web efisien.</p>
            <div class="loading">
            <svg width="64px" height="48px">
                <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
                <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
            </svg>
            </div>
        </div>
        <div id="item-3">
            <h2><span>Fleksibilitas dan Integrasi</span></h2>
            <p>Dapat diintegrasikan dengan berbagai database, meningkatkan fleksibilitas.</p>
        </div>
        <div id="item-4">
            <h2>Membangun Portofolio</h2>
            <p>kesempatan bagi mahasiswa untuk membangun proyek nyata dan meningkatkan portofolio pengembangan web.</p>
            <img className='industry' src={coding} alt="" />
        </div>
        <div id="item-5">
            <h2>Komunitas dan Sumber Daya</h2>
            <p>Komunitas pengembang yang besar memberikan dukungan dan sumber daya pembelajaran.</p>
            <div class="pyramid-loader">
            <div class="wrapper">
                <span class="side side1"></span>
                <span class="side side2"></span>
                <span class="side side3"></span>
                <span class="side side4"></span>
                <span class="shadow"></span>
            </div>  
            <div class="loader"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default GridPHP