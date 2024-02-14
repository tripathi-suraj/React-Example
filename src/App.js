import React from 'react';
import './style.css';
import { AES, MD5 } from 'crypto-js';

export default function App() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <div>
      <h1>Hello StackBlitz! {MD5('test').toString()}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
