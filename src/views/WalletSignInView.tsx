import React from 'react';
import { Link } from 'react-router-dom';

import './WalletSignInView.css';
import { Wallet } from '../containers/WalletConnector';

const WalletSignInView: React.FC = () => {
    return (
        <Wallet>
            <div className="wallet-main-container">
                <Link to="/" className="back-arrow">{"<"}</Link>
                <h1 className="wallet-main-header">Sing in with wallet</h1>
                <p className="wallet-sub-header">Select the Solana wallet you want to connect</p>
                <p className="wallet-bottom-text"><a href="#" className="terms-link">Terms of Use</a> will be automatically accepted.</p>
            </div>
        </Wallet>
    );
}

export default WalletSignInView;
