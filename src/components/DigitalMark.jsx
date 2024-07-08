import React from "react";
import Card from "./Card";

const DigitalMark = ({ articles }) => {
  const digitalMarkData = articles.filter((item) => {
    return item.head === "Digital Marketing";
  });
  return (
    <div>
      <h1>Digital Marketing</h1>
      {digitalMarkData.map((item) => {
        return (
          <>
            <Card key={item.id} item={item} />
          </>
        );
      })}
    </div>
  );
};

export default DigitalMark;
