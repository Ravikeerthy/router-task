import React from "react";
import Card from "./Card";

const CyberSecurity = ({ articles }) => {
  const cybersecurityData = articles.filter((item) => {
    return item.head === "Cyber Security";
  });
  return (
    <div>
      <h1>Cyber Security</h1>
      {cybersecurityData.map((item) => {
        return (
          <>
          
            <Card key={item.id} item={item} />
          </>
        );
      })}
    </div>
  );
};

export default CyberSecurity;
