import React from "react";
import BrawlerCard from "./BrawlerCard";

const BrawlerList = ({ brawlers }) => {
  if (!brawlers || !brawlers.length === 0) {
    return <div id="loading">Brawler not found</div>;
  }

  return (
    <div id="brawlers-container">
      {brawlers.map((brawler) => (
        <BrawlerCard key={brawler.id} brawler={brawler}></BrawlerCard>
      ))}
    </div>
  );
};

export default BrawlerList;
