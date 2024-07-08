import React from "react";
import Card from "./Card";

const DataScience = ({ articles }) => {
  const datascienceData = articles.filter(
    (item) => item.head === "Data Science"
  );
  return (
    <div>
      <h1>Data Science</h1>
      {datascienceData.map((item) => {
        return (
          <>
          
            <Card key={item.id} item={item} />
          </>
        );
      })}
    </div>
  );
};

export default DataScience;
