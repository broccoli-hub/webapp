import { useState } from "react";

import "./NFTBar.css";

function NFTBar() {
  const [selected, setSelected] = useState("NFT name 1");

  return (
    <div className="segmented-control">
      <button
        className={`segment ${selected === "NFT name 1" ? "active" : ""}`}
        onClick={() => setSelected("NFT name 1")}
      >
        NFT name 1
      </button>
      <button
        className={`non-selectable segment ${selected === "NFT name 2" ? "active" : ""}`}
        onClick={() => setSelected("NFT name 2")}
        disabled
      >
        NFT name 2
      </button>
    </div>
  );
}

export default NFTBar;
