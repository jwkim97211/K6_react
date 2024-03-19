import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  //./App.js


//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));  //가상돔을 만듬
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

//<App />=태그(내가 만든 태그=컴포넌트,자바스크립트 함수(대문자로 시작)) 일반태그는 소문자
//return문이 반드시 있어야함
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
