import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import axios from '../axios';
import Posts from './Posts';
import Authors from './Authors';

class Blog extends Component {
  state = {
    error: false,
    errorMessage: null,
    authors: [],
    posts: [],
  };

  componentDidMount() {
    axios
      .get('/users')
      .then(({ data }) => {
        this.setState({ authors: data });

        return axios.get('/posts');
      })
      .then(({ data }) => {
        const posts = [...data];

        posts.forEach((post) => {
          const author = this.state.authors.find(
            (author) => author.id === post.userId
          );

          post.authorName = author.name;
          post.username = author.username;
        });

        this.setState({ posts });
      })
      .catch((error) => {
        this.setState({ error: true, errorMessage: error });
      });
  }

  render() {
    return (
      <Fragment>
        <Route path='/' exact>
          <Authors data={this.state.authors.slice(0, 4)} home />
          <Posts data={this.state.posts.slice(0, 6)} />
        </Route>
        <Route path='/posts'>
          <Posts data={this.state.posts} />
        </Route>
        <Route path='/authors'>
          <Authors data={this.state.authors} />
        </Route>
      </Fragment>
    );
  }
}

export default Blog;
