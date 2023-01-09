import React from "react";
import Avartar from "./Avartar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avartar img={props.img} />
      </div>
      <div className="bottom">
        <Details detailInfo={props.phone} />
        <Details detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
