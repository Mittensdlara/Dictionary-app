import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        
      
      </header>
      <main>
        <Dictionary defaultKeyword="Sunset" />
      </main>
      <footer className='App-footer'>Coded by Del❤ open sourced on <a href='https://github.com/mittensdlara/dictionary-ap'>Github</a></footer>
      </div>
    </div>
  );
}


