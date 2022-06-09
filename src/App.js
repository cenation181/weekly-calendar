import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Timezone from './components/Timezone';
import Week from './components/Week';

function App() {
  return (
    <>
    <Navbar/>
    <Timezone/>
    <Week/>
    </>
  );
}

export default App;
