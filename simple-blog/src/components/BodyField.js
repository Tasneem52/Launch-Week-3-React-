import React from 'react';

const BodyField = (props) => {
  return (
    <label>{props.label}
      <textarea
        id="articleBody"
        name={props.name}
        value={props.content}
        onChange={props.handlerFunction}
      />
    </label>
  );
}

export default BodyField;
