import React from 'react';

const TitleField = (props) => {
  return (
    <label>{props.label}
      <input
        id="articleTitle"
        name={props.name}
        type='text'
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  );
}

export default TitleField;
