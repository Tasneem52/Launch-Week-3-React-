import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div className="back-button button" onClick={browserHistory.goBack}>
      <button>Back</button>
    </div>
  )
}

export default BackButton;
