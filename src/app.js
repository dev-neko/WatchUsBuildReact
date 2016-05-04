import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jQuery';
import CommentBox from './components/comment-box';
import {Router, Route} from 'react-router';
import Layout from './layout/layout';

const app = (
  <Router>
    <Route path="/" component={Layout} />
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('comment-box'),
    () => console.timeEnd('react-app')
  );
})
