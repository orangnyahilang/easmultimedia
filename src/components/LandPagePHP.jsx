import React from 'react';
import './landpagePHP.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import bg1element from '../assets/images/bgelement1.png'
import php from '../assets/images/php.png';

function LandPagePHP() {

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
    
  return (
    <>
    <div className='php'>
    <div className='arrowposition'>
        <Link onClick={handleBack}>
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
        <img src={php} alt="" />
        </div>
    </div>
    <div className="bottom-arrow-container" onClick={handleClick}>
        <FontAwesomeIcon icon={faAnglesDown} className="arrow-icon" />
    </div>    
    <div className='grid2' id='list'>
        <h1>Apa saja yang perlu dipelajari bagi pemula?</h1>
      <Link to='tutorial1'>
      <div className='buttonlist'>
          Konsep Dasar PHP
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
      </div>
      </Link>
      <Link to='tutorial2'>
      <div className='buttonlist'>
          Instalasi dan Konfigurasi PHP
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
      </div>
      </Link>
      <Link to='tutorial3'>
      <div className='buttonlist'>
          Struktur Dasar PHP
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
      </div>
      </Link>
      <Link to='tutorial4'>
      <div className='buttonlist'>
          Tipe Data dan variabel PHP
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
      </div>
      </Link>
      <Link to='tutorial5'>
      <div className='buttonlist'>
          Operator di PHP
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
      </div>
      </Link>
      <Link to='tutorial6'>
      <div className='buttonlist'>
          Prosedur dan Fungsi PHP
          <div class="arrow-wrapper">
              <div class="arrow"></div>
          </div>
      </div>
      </Link>
    </div>

    <div className='gridelement1'>
      <div className='flow-overlay-element1'></div>
      <img src={bg1element} />
    </div>

    {/* <div className='ball3'>
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
    </div> */}
    
    {/* <div class="typewriter">
        <div class="slide"><i></i></div>
        <div class="paper"></div>
        <div class="keyboard"></div>
    </div> */}

    {/* <div className='ploader'>
    <svg class="pl" width="240" height="240" viewBox="0 0 240 240">
      <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
      <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
      <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
      <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    </svg>
    </div>
    <div className='loaderfourspellposition'>
      <section class="loaderfourspell">
        <div class="slider">
        </div>
        <div class="slider">
        </div>
        <div class="slider">
        </div>
        <div class="slider">
        </div>
        <div class="slider">
        </div>
      </section>
    </div> */}

    </div>
    </>
  )
}

export default LandPagePHP;