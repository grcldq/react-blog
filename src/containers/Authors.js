import React from 'react';

import Author from '../components/Author';
import './Authors.css';

const authors = (props) => {
  let section = [
    <h1>Our Blog Authors</h1>,
    <section className='authors-home'>
      {props.data && props.data.map((author) => <Author key={author.id} />)}
    </section>,
  ];

  if (!props.home) {
    section = [
      <h1>Authors</h1>,
      <section className='authors-page'>
        {props.data && props.data.map((author) => <Author key={author.id} />)}
      </section>,
    ];
  }

  return <div className={props.home ? 'authors-with-bg' : ''}>{section}</div>;
};

export default authors;
