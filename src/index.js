import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myBlogPost = {
  title: 'My first blog',
  body: 'lorem ipsum dolor sit amet...',
  published: true
}

let classProperties;
if(myBlogPost.published) {
  classProperties='green';
} else {
  classProperties="red";
}
const blogPost = (
  <div>
    <h1 id="title" className={classProperties}>{myBlogPost.title}</h1>
    <p>{myBlogPost.body}</p>
    <img src="" alt=""/>
  </div>
)
ReactDOM.render(
  blogPost,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
