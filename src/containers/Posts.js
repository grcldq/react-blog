import React from 'react';

import Post from '../components/Post';

import './Posts.css';

const posts = (props) => {
  let posts = <p>Something went wrong!</p>;

  if (!props.error) {
    posts = props.data && props.data.map((post) => (
      <Post
        data={post}
        key={post.id}
      />
    ));
  }

  return <section className='posts'>{posts}</section>;
};

export default posts;
