import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import "./BrawlerDetailPage.css";

interface BrawlerForm {
  formName: string;
  attack: { name: string; description: string };
  super: { name: string; description: string };
}

interface SuperVariation {
  name: string;
  description: string;
}

interface Brawler {
  id: number;
  name: string;
  description?: string;
  rarity: { id: number; name: string };
  class?: { id: number; name: string };

  forms?: BrawlerForm[];
  attack?: { name: string; description: string };
  super?: { name: string; description: string };
  hypercharge?: { name: string; description: string };
  gadgets?: { id: number; name: string; description: string }[];
  starPowers?: { id: number; name: string; description: string }[];

  superVariations?: SuperVariation[];
}

interface BrawlerDetailPageProps {
  allBrawlers: Brawler[];
}

const rarityColors: { [key: string]: string } = {
  COMMON: "#a4f2fd",
  RARE: "#5AFE01",
  "SUPER RARE": "#0271FF",
  EPIC: "#D500FF",
  MYTHIC: "#FF1603",
  LEGENDARY: "#fdd835",
  "ULTRA LEGENDARY": "#ff9800",
};

function BrawlerDetailPage({ allBrawlers }: BrawlerDetailPageProps) {
  const { brawlerName } = useParams<{ brawlerName: string }>();
  const [brawler, setBrawler] = useState<Brawler | null>(null);
  const [selectedFormIndex, setSelectedFormIndex] = useState(0);

  useEffect(() => {
    if (allBrawlers.length > 0 && brawlerName) {
      const selectedBrawler = allBrawlers.find(
        (b) =>
          (b.name as string).toLowerCase().replace(/ /g, "-") ===
          brawlerName.toLowerCase().replace(/ /g, "-")
      );
      setBrawler(selectedBrawler || null);
      setSelectedFormIndex(0);
    }
  }, [brawlerName, allBrawlers]);

  if (!brawler) {
    return <div>Brawler not found...</div>;
  }

  return (
    <>
      <Header showSearchBar={false} brawlerName={brawler.name} />

      <div className="brawler-detail-page-container">
        <div className="brawler-detail-grid">
          {/* ======================= LEFT COLUMN ======================= */}
          <div className="brawler-overall-col-left">
            {/* 1. Banner Name & Tagline */}
            {(() => {
              const rarityName = brawler.rarity?.name;
              const rarityColor = rarityColors[rarityName] || "#555";
              return (
                <div
                  className="brawler-name-container"
                  style={{ backgroundColor: rarityColor }}
                >
                  <div className="brawler-name-wrapper">
                    <h2 className="brawler-name-main">{brawler.name}</h2>
                    <div className="brawler-tagline-container">
                      {brawler.class?.name && (
                        <img
                          src={`/assets/classIcons/icon_class_${brawler.class.name
                            .split(" ")[0]
                            .toLowerCase()}.png`}
                          alt={brawler.class.name}
                          className="brawler-class-icon"
                        />
                      )}
                      <h3 className="brawler-tagline-text">
                        {brawler.class?.name.toUpperCase()}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* 2. Description */}
            <p className="brawler-description">{brawler.description}</p>

            {/* 3. Detail; Box */}
            <div className="brawler-detail-col-left">
              <div className="section-card">
                <h4 className="section-title-inset">STATS</h4>
                <div className="stats-grid">
                  <div className="stat-line">
                    <img src="/assets/health.png" alt="Health" />
                    <span>Health:</span>
                    <strong>...</strong>
                  </div>
                  <div className="stat-line">
                    <img src="/assets/speed.png" alt="Movement Speed" />
                    <span>Movement Speed:</span>
                    <strong>...</strong>
                  </div>
                </div>
              </div>

              {brawler.forms && brawler.forms.length > 0 ? (
                <>
                  {brawler.forms.length > 1 && (
                    <div className="form-switcher">
                      {brawler.forms.map((form, index) => (
                        <button
                          key={form.formName}
                          className={
                            selectedFormIndex === index ? "active" : ""
                          }
                          onClick={() => setSelectedFormIndex(index)}
                        >
                          {form.formName}
                        </button>
                      ))}
                    </div>
                  )}
                  {(() => {
                    const currentForm = brawler.forms[selectedFormIndex];
                    if (!currentForm) return null;
                    return (
                      <>
                        <div className="section-card">
                          <div className="ability-display-card">
                            <div className="ability-display-icon attack">
                              <img src="/assets/attack.png" alt="Attack" />
                            </div>
                            <div className="ability-display-info">
                              <h4>ATTACK: {currentForm.attack.name}</h4>
                              <p>{currentForm.attack.description}</p>
                            </div>
                          </div>
                        </div>
                        <div className="section-card">
                          <div className="ability-display-card">
                            <div className="ability-display-icon super">
                              <img src="/assets/super.png" alt="Super" />
                            </div>
                            <div className="ability-display-info">
                              <h4>SUPER: {currentForm.super.name}</h4>
                              <p>{currentForm.super.description}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </>
              ) : brawler.attack && brawler.super ? (
                <>
                  <div className="section-card">
                    <div className="ability-display-card">
                      <div className="ability-display-icon attack">
                        <img src="/assets/attack.png" alt="Attack" />
                      </div>
                      <div className="ability-display-info">
                        <h4>ATTACK: {brawler.attack.name}</h4>
                        <p>{brawler.attack.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="section-card">
                    <div className="ability-display-card">
                      <div className="ability-display-icon super">
                        <img src="/assets/super.png" alt="Super" />
                      </div>
                      <div className="ability-display-info">
                        <h4>SUPER: {brawler.super.name}</h4>
                        <p>{brawler.super.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="section-card">
                  <p>Statistic data for this brawler is invalid.</p>
                </div>
              )}

              {brawler.superVariations &&
                brawler.superVariations.length > 0 && (
                  <div className="super-variations-container">
                    <h4 className="section-title-inset">KEMUNGKINAN SUPER</h4>
                    {brawler.superVariations.map((variation) => (
                      <div key={variation.name} className="variation-card">
                        <h5>{variation.name}</h5>
                        <p>{variation.description}</p>
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>

          {/* ======================= CENTER COLUMN ======================= */}
          <div className="brawler-detail-col-center">
            <img
              src={`/assets/brawlersmodel/${brawler.name
                .toLowerCase()
                .replace(/ /g, "")
                .replace(/'/g, "")}model.png`}
              alt={brawler.name}
              className="brawler-portrait-main"
            />
          </div>

          {/* ======================= RIGHT COLUMN ======================= */}
          <div className="brawler-detail-col-right">
            {/* --- Gadgets --- */}
            {brawler.gadgets && brawler.gadgets.length > 0 && (
              <>
                <h4 className="section-title">GADGETS</h4>
                {brawler.gadgets.map((gadget, index) => {
                  const gadgetFileName = `${brawler.name
                    .toLowerCase()
                    .replace(" ", "")}_gadget_${String(index + 1).padStart(
                    2,
                    "0"
                  )}.png`;
                  return (
                    <div key={gadget.id} className="ability-card">
                      <div className="ability-icon gadget">
                        <img
                          src={`/assets/gadgets/${gadgetFileName}`}
                          alt={gadget.name}
                        />
                      </div>
                      <div className="ability-info">
                        <h3>{gadget.name}</h3>
                        <p>{gadget.description}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* --- Star Powers --- */}
            {brawler.starPowers && brawler.starPowers.length > 0 && (
              <>
                <h4 className="section-title">STAR POWERS</h4>
                {brawler.starPowers.map((starPower, index) => {
                  const starPowerFileName = `${brawler.name
                    .toLowerCase()
                    .replace(" ", "")}_starpower_${String(index + 1).padStart(
                    2,
                    "0"
                  )}.png`;
                  return (
                    <div key={starPower.id} className="ability-card">
                      <div className="ability-icon star-power">
                        <img
                          src={`/assets/starpowers/${starPowerFileName}`}
                          alt={starPower.name}
                        />
                      </div>
                      <div className="ability-info">
                        <h3>{starPower.name}</h3>
                        <p>{starPower.description}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}

            {/* --- Hypercharge --- */}
            {brawler.hypercharge && (
              <>
                <h4 className="section-title">HYPERCHARGE</h4>
                <div className="ability-card">
                  <div className="ability-icon hypercharge">
                    <img
                      src={`/assets/hypercharges/${brawler.name
                        .toLowerCase()
                        .replace(" ", "")}_hypercharge.png`}
                      alt={brawler.hypercharge.name}
                    />
                  </div>
                  <div className="ability-info">
                    <h3>{brawler.hypercharge.name}</h3>
                    <p>{brawler.hypercharge.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BrawlerDetailPage;
