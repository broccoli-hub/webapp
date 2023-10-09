import React from 'react';
import './CustomButton.css';

interface ButtonProps {
    primary: boolean;
    text: string;
    onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ primary, text, onClick }) => {
    return (
        <button className={`custom-btn ${primary ? 'primary-btn' : 'secondary-btn'}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default CustomButton;
