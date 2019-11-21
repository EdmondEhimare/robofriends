import React from "react";
import Robots from './Robots';

const Card = () => {
  return (
    <div className = 'bg-light-green dib pa3 ma2 grow br3 bw2 shadow-5'>
      <img src="https://robohash.org/testtest?200x200" alt="robots" />
      <div>
        <h1>Jane Doe</h1>
        <p>janedoe@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;
