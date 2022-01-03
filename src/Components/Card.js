import React from "react";

const card = ({ name, id, email }) => {
  return (
    <div className="bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-3 tc">
      <img
        width="150"
        height="150"
        alt="Robots"
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default card;
