import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jQuery';
import {Router, Route, Redirect} from 'react-router';
import Layout from './layout/layout';

import BlogPage    from './pages/blog';
import VideoPage   from './pages/video';
import PicturePage from './pages/picture';

const app = (
  <Router>
    <Redirect from="/" to="/blog" />
    <Route path="/" component={Layout}>
      <Route path="blog"    component={BlogPage} />
      <Route path="video"   component={VideoPage} />
      <Route path="picture" component={PicturePage} />
    </Route>
  </Router>
)

jQuery(function() {
  ReactDOM.render(
    app,
    document.getElementById('comment-box'),
    () => console.timeEnd('react-app')
  );
})
