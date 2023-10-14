import React, { useState } from 'react';

import './ToggleSwitch.css';

interface ToggleSwitchProps {
    isChecked: boolean;
    onToggle: (checked: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isChecked, onToggle }) => {
    const [isToggled, setToggle] = useState<boolean>(isChecked)

    return (
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={(e) => { setToggle(e.target.checked); return onToggle(e.target.checked) }} />
            <span className="slider"></span>
        </label>
    );
};

export default ToggleSwitch;
