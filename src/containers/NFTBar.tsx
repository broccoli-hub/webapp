import { useState } from "react";

import "./NFTBar.css";

function NFTBar() {
    const [selected, setSelected] = useState("NFT name 1");

    return (
        <div className="nft-container">
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
            <div className="nft-info">
                <img src="images/nft1.png" alt="NFT" className="nft-image" />
                <div className="nft-details">
                    <h3>Custom name</h3>
                    <p>Token Id</p>
                </div>
            </div>
        </div>
    );
}

export default NFTBar;
