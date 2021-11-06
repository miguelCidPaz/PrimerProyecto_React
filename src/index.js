import React from 'react';
import ReactDOM from 'react-dom';
import Cabecera from './Components/Cabecera';
import FastBar from './Components/fastBar';
import Cuerpo from './Components/Cuerpo';
import Paginador from './Components/Paginador';
import Footer from './Components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Cabecera />
    <FastBar />
    <Cuerpo />
    <Paginador />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
