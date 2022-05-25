import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
 
import Header from './components/header';
import Welcome from './components/welcome';

function App() {

  return (
    <div className="App">
        <Header />
        <Welcome />
    </div>
  )
}

export default App
