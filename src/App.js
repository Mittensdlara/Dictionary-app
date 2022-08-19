import React from 'react';
import './App.css';
import logo from './logo-shecodes.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        
       <img src={logo} alt='logo' width="300px" className='rounded mx-auto d-block'/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='App-footer'>Coded by Del❤</footer>
      </div>
    </div>
  );
}


