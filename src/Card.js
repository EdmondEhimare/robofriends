import React from "react";

const Card = ({ name, job, id, email }) => {
  return (
    <div className="tc bg-light-green dib pa3 ma2 grow br3 bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <h3>{job}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
