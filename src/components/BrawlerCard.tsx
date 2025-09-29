// src/components/BrawlerCard.tsx
import React from "react";
import { Link } from "react-router-dom";

interface Brawler {
  id: number;
  name: string;
  rarity: { id: number; name: string };
}

interface BrawlerCardProps {
  brawler: Brawler;
}

const BrawlerCard: React.FC<BrawlerCardProps> = ({ brawler }) => {
  if (!brawler.rarity || !brawler.rarity.id) {
    return null;
  }

  const rarityId = brawler.rarity.id;
  const sanitizedName = brawler.name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/'/g, "");
  const imageUrl = `assets/brawlers/${sanitizedName}.png`;

  return (
    <Link to={`/brawler/${sanitizedName}`}>
      <div className="brawler-card" data-rarity={rarityId}>
        <img src={imageUrl} alt={brawler.name}></img>
        <div className="brawler-name-banner">
          <h3>{brawler.name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default BrawlerCard;
