// HalamanUtama.jsx
import React, { useState, useEffect } from 'react';
import './style.css';
import bg1 from '../assets/images/bg1.png'

const Home = () => {
  const [width, setWidth] = useState('0%'); // Set initial width to 0%

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Set width to 100% every 3 seconds (adjust the duration as needed)
      setWidth('100%');
      
      // After 1 second, reset the width to 0%
      setTimeout(() => {
        setWidth('0%');
      }, 1000);
    }, 3000); // Change the interval duration as needed

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="container1">
      {/* Container 1 */}
      <div className='containerbg'></div>
      <div className="container2">
        {/* Container 2 */}
        <div className="grid1">
          <div className='cubesl'>
            <div class="loop cubes">
                      <div class="item cubes"></div>
                      <div class="item cubes"></div>
                      <div class="item cubes"></div>
                      <div class="item cubes"></div>
                      <div class="item cubes"></div>
                      <div class="item cubes"></div>
              </div>
            </div>
          <div className='ggboltdiv'>
            <i class="gg-bolt"></i>
          </div>
          <div>
            <h1>Pembelajaran Web dengan PHP dan MySQL </h1>
            <p>Pengembangan web dengan PHP dan MySQL adalah kombinasi kuat yang memungkinkan pembuatan aplikasi web dinamis</p>
          </div>
          <div className='btnarrow'>
            <a href='/easmultimedia/phplanding'>
              <button class="learn-more">
              <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
              </span>
              <span class="button-text">PHP</span>
              </button>
            </a>
            <a href='/easmultimedia/sqllanding'>
            <button class="learn-more2">
              <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
              </span>
              <span class="button-text"> SQL</span>
            </button>
            </a>
          </div>
          <div className='avatar1'>
            <div class="flex items-center gap-4">
                <img class="w-10 h-10 rounded-full" src={bg1} alt=""/>
                <div class="font-medium dark:text-black">
                    <div>Our Team's</div>
                    <div class="text-sm text-gray-500 dark:text-gray-400">Arya, Felix, Niko</div>
                </div>
            </div>

            <br/>

            <div class="flex justify-between mb-1">
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
              <div
                className="bg-blue-300 h-2.5 rounded-full"
                style={{ width: width, transition: 'width 1s ease-in-out' }}
              ></div>
            </div>  
          </div>
        </div>
        <div className="grid2">
          <button className='buttong2'>
              <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span>Email</span>
            </button>

          {/* Grid 2 */}
          {/* Isi sesuai kebutuhan */}
        </div>
      </div>
    </div>
  );
};

export default Home;
