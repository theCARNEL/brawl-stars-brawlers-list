// src/components/BrawlerCard.tsx
import React from "react";
import { Link } from "react-router-dom";

// Interface minimal brawler untuk komponen ini
interface Brawler {
  id: number;
  name: string;
  rarity: { id: number; name: string };
  // Tambahkan properti lain yang digunakan
}

interface BrawlerCardProps {
  brawler: Brawler; // Tipe Prop yang Eksplisit
}

const BrawlerCard: React.FC<BrawlerCardProps> = ({ brawler }) => {
  if (!brawler.rarity || !brawler.rarity.id) {
    return null;
  }

  const rarityId = brawler.rarity.id;
  // FIX: Gunakan fungsi sanitasi yang aman untuk URL dan nama file
  const sanitizedName = brawler.name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/'/g, "");
  const imageUrl = `assets/brawlers/${sanitizedName}.png`;

  return (
    // FIX: Gunakan nama yang sudah di-sanitasi untuk URL
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
