import React from 'react';
import CommentBox from '../components/comment-box';

export default class AboutPage extends React.Component {

  render() {
    return (
      <div>
        <div className="cell">
          <article className="article">
          <h1 className="article-title">About</h1>
          <div className="article-body">
            <p>
              This is a page about this application.
            </p>
          </div>
          </article>
        </div>
        <CommentBox apiUrl="api/about/comments.json" />
      </div>
    )
  }

}
