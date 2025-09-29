// src/components/BrawlerList.tsx
import React from "react";
import BrawlerCard from "./BrawlerCard.tsx";

interface BrawlerListProps {
  brawlers: any[];
}

const BrawlerList: React.FC<BrawlerListProps> = ({ brawlers }) => {
  if (!brawlers || brawlers.length === 0) {
    return <div id="loading">Brawler not found</div>;
  }

  return (
    <div id="brawlers-container">
      {brawlers.map((brawler) => (
        <BrawlerCard key={brawler.id} brawler={brawler} />
      ))}
    </div>
  );
};

export default BrawlerList;
