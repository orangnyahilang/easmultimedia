import React from 'react';
import './grid2.css';

function GridPHPSQL() {

  const coding = require('../assets/images/bg1.png'); 
  
  return (
    <>
        <div class="checkbox-wrapper">
            <input id="_checkbox-26" type="checkbox"/>
            <label for="_checkbox-26">
                <div class="tick_mark"></div>
            </label>
        </div>
        <div class="kedua-grid">
            <div id="item-0">
            <div class="parent">
                  <div class="card">
                      <div class="logo">
                          <span class="circle circle1"></span>
                          <span class="circle circle2"></span>
                          <span class="circle circle3"></span>
                          <span class="circle circle4"></span>
                          <span class="circle circle5">
                          </span>

                      </div>
                      <div class="glass"></div>
                      <div class="content">
                          <span class="title">PHP (Language Programming)</span>
                          <span class="text">Scripting yang digunakan dalam proses web development</span>
                      </div>
                      <div class="bottom">
                          
                          <div class="social-buttons-container">
                          </div>
                          <div class="view-more">
                              <button class="view-more-button">View more</button>
                              <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
            <div id="item-1">
            <div class="parent">
                  <div class="card">
                      <div class="logo">
                          <span class="circle circle1"></span>
                          <span class="circle circle2"></span>
                          <span class="circle circle3"></span>
                          <span class="circle circle4"></span>
                          <span class="circle circle5">
                          </span>

                      </div>
                      <div class="glass"></div>
                      <div class="content">
                          <span class="title">SQL (Database)</span>
                          <span class="text">sebuah bahasa yang digunakan untuk mengakses data dalam basis data relasional</span>
                      </div>
                      <div class="bottom">
                          
                          <div class="social-buttons-container">
                          </div>
                          <div class="view-more">
                              <button class="view-more-button">View more</button>
                              <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default GridPHPSQL