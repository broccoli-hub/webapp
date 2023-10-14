
import DeviceComponent from '../components/Device';
import AirQualityAnalyzer from './devices/AirQualityAnalyzer';
import Lamp from './devices/Lamp';

import './DashboardBody.css';
import AddDeviceComponent from './devices/AddDeviceComponent';
import Navbar from '../components/NavBar';

const DashboardBody: React.FC = () => {
    return (
        <div className="body">
            <div className="device-label">My devices</div>
            <DeviceComponent device={{ type: 'Air Quality Analyzer' }} options={{ isSingle: false }}><AirQualityAnalyzer /></DeviceComponent>
            <div className="two-devices-wrapper">
                <DeviceComponent device={{ type: 'Light Switch' }} options={{ isSingle: true, isSwitch: true }}><Lamp customName='Custom Name' status='Off' /></DeviceComponent>
                {/* <DeviceComponent device={{ type: 'Light Switch' }} options={{ isSingle: true, isSwitch: true }}><Lamp customName='Custom Name' status='On'/></DeviceComponent> */}
                <AddDeviceComponent />
            </div>
            <Navbar />
        </div>
    )
}

export default DashboardBody;