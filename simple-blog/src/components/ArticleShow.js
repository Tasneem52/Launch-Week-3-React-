import React from 'react';
import { browserHistory, Link } from 'react-router';

import BackButton from './BackButton.js';
const ArticleShow = (props) => {
  return(
    <div className="article-show small-8 small-centered">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <BackButton />
    </div>
  )
}

export default ArticleShow;
