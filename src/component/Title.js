import React from 'react';

function Title(props) {
    const {title , desc} = props
  return (
    <div>
         <h3>{title}</h3>
         <p>{desc}</p>
      
    </div>
  )
}
export default Title;
