import React from "react";

const card = (props) => {
  return (
    <div className="bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-3 tc">
      <img
        width="150"
        height="150"
        alt="Robots"
        src={`https://robohash.org/${props.id}?size=300x300`}
      />
      <div>
        <h1>{props.name}</h1>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default card;
