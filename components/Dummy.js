import React from 'react';

function Dummy(props) {
  return (
    <div className='dummy'>
      Hello React!
      <p>hello</p>
      {props.children}
    </div>
  );
}

export default Dummy;