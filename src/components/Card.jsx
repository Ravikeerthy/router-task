import React from "react";
import "./Style/CardContainer.css";

const Card = ({ item }) => {
  return (
    <div>
      <div className="col mb-3" id="card-design">
        <div className="card">
          <img src={item.articleImg} className="card-img-top img-thumbnail" alt="img" />

          <div className="card-body">
            <h5 className="card-title">{item.head}</h5>
            <h6 className="card-text">{item.topic}</h6>
          </div>

          <a href="" id="a-link">
            <p>{item.description}</p>
            <a href="" style={{ color: "blue", textDecoration: "underline" }}>
              Read More..
            </a>
          </a>

          <div className="d-flex justify-content-between mt-5">
            <small>{item.date}</small>
            <small>{item.author}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
