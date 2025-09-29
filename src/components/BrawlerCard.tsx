import React from "react";
import { Link } from "react-router-dom";

const BrawlerCard = ({ brawler }) => {
  if (!brawler.rarity || !brawler.rarity.id) {
    return null;
  }

  const rarityId = brawler.rarity.id;
  const imageName = brawler.name.toLowerCase().replace(/ /g, "-");
  const imageUrl = `assets/brawlers/${imageName}.png`;

  return (
    <Link to={`/brawler/${brawler.name.toLowerCase()}`}>
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
