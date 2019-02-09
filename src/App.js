import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <figure>
            <img 
              src="download.png"
              alt="google"
              id="App-header-image"
            />
          </figure>
        </header>
        <main className="App=main">
          <div id="search-box">
            <label for="search-text" />
            <input type="text" id="search-text" name="search-text" placeholder="Search Google or type a URL"/>
            <div id="icon">
              <i className="" />
            </div>
          </div>
        </main>
        <footer className="App-footer">
          <figure className="footer-figure">
            <img 
            src="download (1).png"
            alt=""
            className="App-footer-img"
            />
          </figure>
          <figure className="footer-figure">
            <img 
            src="download (2).png"
            alt=""
            className="App-footer-img"
            />
          </figure>
          <figure className="footer-figure">
            <img 
            src="download (3).png"
            alt=""
            className="App-footer-img"
            />
          </figure>
          <figure className="footer-figure">
            <img 
            src="download (4).png"
            alt=""
            className="App-footer-img"
            />
          </figure>
          <figure className="footer-figure">
            <img 
            src="download (5).png"
            alt=""
            className="App-footer-img"
            />
          </figure>
          <figure className="footer-figure">
            <img 
            src="download (6).png"
            alt=""
            className="App-footer-img"
            />
          </figure>
        </footer>
      </div>
    );
  }
}

export default App;
