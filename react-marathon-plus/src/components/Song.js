import React from 'react';

const Song = (props) => {

  return(
    <div onClick={props.handleClick} className={props.selectedClass}>
      {props.name} - {props.artist}
    </div>
  )
};

export default Song
