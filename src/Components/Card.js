import React from "react";

const card = (props) => {
  return (
    <div className="bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-3 tc">
      <img
        width="150"
        height="150"
        alt="Robots"
        src={`https://robohash.org/${props.id}?size=200x200`}
      />
      <div>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default card;
