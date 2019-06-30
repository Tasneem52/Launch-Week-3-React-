import React from 'react'

const Answer = (props) => {

 let classes = `button answer ${props.selectedClass}`

 return(
   <div>
     <button className={classes} onClick={props.handleClick}>{props.body}</button>
   </div>
 )
}

export default Answer
