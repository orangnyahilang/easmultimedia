import React from 'react';
import './landpage.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

function LandPagePHP() {

    const handleClick = () => {
        // Mengarahkan pengguna ke halaman dengan ID 'list'
        const listSection = document.getElementById('list');
        if (listSection) {
          listSection.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  return (
    <div className='php'>
    <div className='arrowposition'>
        <Link to='/easmultimedia'>
        <div class="arrow">
          <div class="arrow-top"></div>
          <div class="arrow-bottom"></div>
        </div>
        </Link>
    </div>
    <div className="grid">
        <div className="grid-item1">

        <h1>Tutorial Dasar <span className='highlight-text-php'>PHP.</span></h1>
        <p>
        PHP merupakan bahasa pemrograman server-side yang kuat dan umum digunakan dalam pengembangan web. 
        Digunakan untuk membuat halaman web dinamis dengan kemampuan mengakses dan mengelola data di server.
        </p>
        
        <div className='buttong1' onClick={handleClick}>
          <span>GET STARTED</span>
        </div>
    
        </div>

        <div className="grid-item2">
        <img src="/assets/images/php.png" alt="Image Description" />
        </div>
    </div>
    <div className="bottom-arrow-container" onClick={handleClick}>
        <FontAwesomeIcon icon={faAnglesDown} className="arrow-icon" />
    </div>    
    <div className='grid2' id='list'>
        <h1>Apa saja yang perlu dipelajari bagi pemula?</h1>
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

    <div className='gridelement1'>
    <img src="/assets/images/bgelement1.png" alt="Image Description" />
    </div>

    <div className='ball3'>
    <div class="loader">
  <div class="loader__balls">
    <div class="loader__balls__group">
      <div class="ball item1"></div>
      <div class="ball item1"></div>
      <div class="ball item1"></div>
    </div>
    <div class="loader__balls__group">
      <div class="ball item2"></div>
      <div class="ball item2"></div>
      <div class="ball item2"></div>
    </div>
    <div class="loader__balls__group">
      <div class="ball item3"></div>
      <div class="ball item3"></div>
      <div class="ball item3"></div>
    </div>
  </div>
</div>

    </div>
    
    </div>
  )
}

export default LandPagePHP;