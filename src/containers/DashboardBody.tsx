
import { useEffect, useState } from 'react';

import DeviceComponent from '../components/Device';
import AirQualityAnalyzer from './devices/AirQualityAnalyzer';
import Lamp from './devices/Lamp';
import { generateMockData } from '../utils/airQualityDataGenerator';

import './DashboardBody.css';
import AddDeviceComponent from './devices/AddDeviceComponent';

const DashboardBody: React.FC = () => {
    const [data, setData] = useState<any>({});

    useEffect(() => {
        const mockData = generateMockData();
        setData(mockData);
    }, []);

    return (
        <div className="body">
            <div className="device-label">My devices</div>
            {data?.entities &&
                <>
                    <DeviceComponent device={{ type: 'Air Quality Analyzer' }} options={{ isSingle: false }}><AirQualityAnalyzer /></DeviceComponent>
                    <div className="two-devices-wrapper">
                        <DeviceComponent device={{ type: 'Light Switch' }} options={{ isSingle: true, isSwitch: true }}><Lamp customName='Custom Name' status='Off'/></DeviceComponent>
                        {/* <DeviceComponent device={{ type: 'Light Switch' }} options={{ isSingle: true, isSwitch: true }}><Lamp customName='Custom Name' status='On'/></DeviceComponent> */}
                        <AddDeviceComponent />
                    </div>
                </>
            }
        </div>
    )
}

export default DashboardBody;