import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myBlogPost = {
  title: 'My first blog',
  published: true
}

let isPublishedClassName;

if(myBlogPost.published) {
  isPublishedClassName = "green";
} else {
  isPublishedClassName = "red";
}

const blogPost = (
  <h1 className={isPublishedClassName}>{myBlogPost.title}</h1>
)

ReactDOM.render(
  blogPost,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
