import React from 'react';
import './landpage.css';
import { Link } from 'react-router-dom';

function LandPagePHP() {
  return (
    <div className='php'>
    <div className='arrowposition'>
        <Link to='/home'>
        <div class="arrow">
          <div class="arrow-top"></div>
          <div class="arrow-bottom"></div>
        </div>
        </Link>
    </div>
    <div className="grid">
        <div className="grid-item1">

        <h1>Tutorial Dasar PHP</h1>
        <p>
        PHP merupakan bahasa pemrograman server-side yang kuat dan umum digunakan dalam pengembangan web. 
        Digunakan untuk membuat halaman web dinamis dengan kemampuan mengakses dan mengelola data di server.
        </p>
        
        <div className='buttong1'>
          <span>GET STARTED</span>
        </div>
                
        </div>

        <div className="grid-item2">
        <img src="/assets/images/php.png" alt="Image Description" />
        </div>
    </div>
    <div className='grid2'>
    <div className='buttonlist'>
          Pengenalan PHP
          <div class="arrow-wrapper">
              <div class="arrow"></div>

          </div>
      </div>
      <div className='buttonlist'>
          Panduan Pengguna
          <div class="arrow-wrapper">
              <div class="arrow"></div>

          </div>
      </div>
      <div className='buttonlist'>
          Referensi Fungsi
          <div class="arrow-wrapper">
              <div class="arrow"></div>

          </div>
      </div>
      <div className='buttonlist'>
          Pengelolaan Ekstensi
          <div class="arrow-wrapper">
              <div class="arrow"></div>

          </div>
      </div>
      <div className='buttonlist'>
          PDO (PNP Data Object)
          <div class="arrow-wrapper">
              <div class="arrow"></div>

          </div>
      </div>
      <div className='buttonlist'>
          OOP (Object Oriented Programming)
          <div class="arrow-wrapper">
              <div class="arrow"></div>

          </div>
      </div>
      <div className='buttonlist'>
          Pemrograman Web
          <div class="arrow-wrapper">
              <div class="arrow"></div>

          </div>
      </div>
    </div>
      
    </div>
  )
}

export default LandPagePHP;