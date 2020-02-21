import React from "react";

const Card = () => {
  return (
    <div
      className="card mb-3"
      style={({ maxWidth: "1020px" }, { padding: "5px" }, { margin: "10px" })}
    >
      <div className="row no-gutters">
        <div className="col-md-6">
          <img src="..." className="card-img" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">
              Welcome to Computer Science University of Uyo
            </h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted"></small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
