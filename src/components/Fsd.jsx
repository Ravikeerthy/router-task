import React from "react";
import Card from "./Card";

const Fsd = ({ articles }) => {
  const fsdData = articles.filter(
    (item) => item.head === "Full Stack Developer"
  );
  return (
    <div>
      <h1>Full Stack Developer</h1>
      {fsdData.map((item) => {
        return (
          <>
          
            <Card key={item.id} item={item} />
          </>
        );
      })}
    </div>
  );
};

export default Fsd;
