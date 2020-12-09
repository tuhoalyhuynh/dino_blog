import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const post = {
  title: 'I <3 Dinosaurs',
  author: 'tuhoarex',
  body: "wow... it's a body",
  comments: ['first!', 'great post', 'hire this person!']
}

ReactDOM.render(
  <React.StrictMode>
    <App post={post}/>
  </React.StrictMode>,
  document.getElementById('root')
);

export default post;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
