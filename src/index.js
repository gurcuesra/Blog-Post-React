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

function publishThePost(e) {
  if(e.target.innerText === "Publish"){
    e.target.innerText = "Unpublish";
    document.getElementById('title').style.color = "green";
  } else {
    e.target.innerText = "Publish";
    document.getElementById('title').style.color = "red";
  }
  
}

const blogPost = (
  <div>
    <h1 id="title" className={classProperties}>{myBlogPost.title}</h1>
    <p>{myBlogPost.body}</p>
    <button onClick={publishThePost}>Unpublish</button>
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
