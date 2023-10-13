import React, { useEffect, useState } from 'react';

import AirQualityChart from './AirQualityChart';
import { generateMockData } from './../../utils/airQualityDataGenerator'

import './AirQualityAnalyzer.css'

const AirQualityAnalyzer: React.FC = () => {
    const [data, setData] = useState<any>({});

    useEffect(() => {
        const mockData = generateMockData();
        setData(mockData);
    }, []);
    
    const deviceData = data?.entities?.find((entity: any) => entity.type === 'Device');
    const deviceName = deviceData?.id;
    const environmentData = data?.entities?.find((entity: any) => entity.type === 'IndoorEnvironmentObserved');

    const temperature = environmentData?.temperature?.value;
    const co2 = environmentData?.co2?.value;

    return (
        <div className="air-quality-component">
            <div className="header">{deviceName}</div>
            <div className="data-container">
                {temperature && <div className="temp">{temperature}° Temperature</div>}
                {co2 && <div className="co2">{co2} ppm CO2 level</div>}
                <div className="chart-container">
                    {data?.entities && <AirQualityChart data={data?.entities?.filter((entity: { type: string; }) => entity.type === 'IndoorEnvironmentObserved')} /> }
                </div>
            </div>
        </div>
    );
};

export default AirQualityAnalyzer;
