import { useState } from "react";

import "./NFTBar.css";

interface NFTBarProps {
    onChange: (nft: number) => void
}

const NFTBar: React.FC<NFTBarProps> = ({ onChange }) => {
    const [selected, setSelected] = useState(1);

    return (
        <div className="nft-container">
            <div className="segmented-control">
                <button
                    className={`segment ${selected === 1 ? "active" : ""}`}
                    onClick={() => { setSelected(1); onChange(1); }}
                >
                    NFT name 1
                </button>
                <button
                    className={`segment ${selected === 2 ? "active" : ""}`}
                    onClick={() => { setSelected(2); onChange(2); }}
                >
                    NFT name 2
                </button>
            </div>
            <div className="nft-info">
                {selected === 1 ? <>
                    <img src="images/nft1.png" alt="NFT" className="nft-image" />
                    <div className="nft-details">
                        <h3>Custom name</h3>
                        <p>Token Id</p>
                    </div>
                </> : <>
                    <img src="images/nft2.png" alt="NFT" className="nft-image" />
                    <div className="nft-details">
                        <h3>Custom name</h3>
                        <p>Token Id</p>
                    </div></>
                }
            </div>
        </div>
    );
}

export default NFTBar;
