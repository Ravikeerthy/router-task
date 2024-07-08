import React from "react";
import Card from "./Card";
import "./Style/CardContainer.css";

const All = ({ articles }) => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {articles.map((item) => {  // mapping the article according to the route
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default All;
