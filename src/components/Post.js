import React from 'react';

import './Post.css';

const post = (props) => (
  <article className='post'>
    <h1 className='post-title'> {props.data.title}</h1>
    <p className='post-body'>{props.data.body}</p>
    <p>See more...</p>
    <p className='post-by'>
      Posted By: <span className='post-author'>{props.data.authorName}</span>
    </p>
  </article>
);

export default post;
