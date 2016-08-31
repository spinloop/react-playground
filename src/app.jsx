import React from 'react';
import ReactDOM from 'react-dom';

const domNode = document.getElementById('react');

const Goat = () => (
  <div>
    <button onClick={() => console.log('goat')}>clickable goat</button>
    <a
      href="https://s3-us-west-2.amazonaws.com/goatz/goat.jpg"
      target="_blank"
    >
      see a goat
    </a>
    <img
      src="https://s3-us-west-2.amazonaws.com/goatz/goat.jpg"
      alt="alt"
    />
  </div>
);

ReactDOM.render(<Goat />, domNode);
