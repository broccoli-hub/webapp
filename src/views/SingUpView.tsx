import React from 'react';
import { useNavigate } from 'react-router-dom';

import './SignUpView.css';
import CustomButton from '../components/CustomButton';

const SignUpView: React.FC = () => {
    const navigate = useNavigate();

    const navigateToWalletSignIn = () => {
        navigate("/wallet-signin");
      };

    return (
        <div className="main-container">
            <div className="logo">
                {/* Insert the broccoli cloud logo here */}
                🌳 broccoli
            </div>

            <div className="header-text">
                Sign up <br/> to unlock a new experience
            </div>

            <CustomButton primary={true} text="Continue with wallet" onClick={navigateToWalletSignIn} />
            <CustomButton primary={false} text="Continue with email" />

            <div className="footer-text">
                Account will be automatically registered
            </div>
        </div>
    );
}

export default SignUpView;
