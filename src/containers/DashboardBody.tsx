
import DeviceComponent from '../components/Device';
import AirQualityAnalyzer from './devices/AirQualityAnalyzer';
import Lamp from './devices/Lamp';
import AddDeviceComponent from './devices/AddDeviceComponent';
import Navbar from '../components/NavBar';

import './DashboardBody.css';
import NoDevices from './devices/NoDevices';
import { useState } from 'react';

interface DashboardBodyProps {
    adjustEarningPower: (value: number) => void;
    currentNFT: number;
}

const DashboardBody: React.FC<DashboardBodyProps> = ({ adjustEarningPower, currentNFT }) => {
    const [airCallToAction, setAirCallToAction] = useState<string | undefined>(undefined);
    
    return (
        <div className="body">
            <div className="device-label">My devices</div>
            { currentNFT === 1 ?
                <>
                    <DeviceComponent device={{ type: 'Air Quality Analyzer' }} options={{ isSingle: false }} onOptInToggle={(checked: boolean) => adjustEarningPower(checked ? 8 : -8)} callToAction={airCallToAction}><AirQualityAnalyzer reportCallToAction={(message) => setAirCallToAction(message)}/></DeviceComponent>
                    <div className="two-devices-wrapper">
                        <DeviceComponent device={{ type: 'Light Switch' }} options={{ isSingle: true, isSwitch: true }}><Lamp customName='Custom Name' status='Off' /></DeviceComponent>
                        <AddDeviceComponent />
                    </div>
                </> :
                <NoDevices />
            }
            <Navbar />
        </div>
    )
}

export default DashboardBody;