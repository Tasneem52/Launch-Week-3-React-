import React from 'react';

const Playlist = (props) => {

  return(
    <div onClick={props.handleClick} className={props.selectedClass}> {props.name}</div>
  )
};

export default Playlist
