import React from 'react';
import ReactDOM from 'react-dom';

const domNode = document.getElementById('react');

const Goat = () => (
  <div className="goat">
    <header>
      <div className="logo">Logo</div>
      <div className="link1">line 1<br />line 2</div>
      <div className="link2">Link 2</div>
    </header>
    <div className="content">
      <img
        src="https://s3-us-west-2.amazonaws.com/goatz/goat.jpg"
        alt="alt"
      />
      <div className="test-flex">
        goat
      </div>
    </div>
  </div>
);

ReactDOM.render(<Goat />, domNode);
