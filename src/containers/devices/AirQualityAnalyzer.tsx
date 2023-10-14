import React, { useCallback, useEffect, useState } from 'react';

import AirQualityChart from './AirQualityChart';
import DeviceData from '../../components/DeviceData';
import { fetchDataAndGenerateVariations } from '../../utils/airQualityDataGenerator'
import BroccoliLoading from '../../components/Loading';

import './AirQualityAnalyzer.css'

interface AirQualityAnalyzerProps {
    reportCallToAction: (message: string) => void;
}

interface Entity {
    type: string;
    temperature: any; //{ value: number };
    co2: any;//{ value: number };
    dateObserved: any; //{ value: string | undefined };
}

interface EndpointData {
    entities: Entity[];
    // ... other properties
}

const AirQualityAnalyzer: React.FC<AirQualityAnalyzerProps> = ({ reportCallToAction }) => {
    const [data, setData] = useState<EndpointData | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        console.log('Fetching data');
        const endpointData: any = await fetchDataAndGenerateVariations();
        
        const environmentData = endpointData?.entities?.find((entity: any) => entity.type === 'IndoorEnvironmentObserved');
        const temperature = environmentData?.temperature?.value;
        if (temperature > 10) {
            reportCallToAction('Turn on Air Acconditioner');
        }

        setData(endpointData);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
        const refreshInterval = setInterval(fetchData, 15000);
        return () => clearInterval(refreshInterval);
    }, []);

    const environmentData = data?.entities?.find((entity: any) => entity.type === 'IndoorEnvironmentObserved');
    const temperature = environmentData?.temperature?.value;
    const co2 = environmentData?.co2?.value;

    return (
        <>
            {loading ? (
                <BroccoliLoading />
            ) : (
                <div className="air-data">
                    <div className='air-real-time'>
                        {temperature && <DeviceData value={temperature} valueSuffix='°' label='Temperature'
                            iconPaths={[
                                'M15.9137 8.31107C15.9137 9.54617 15.9196 10.7806 15.9085 12.0157C15.9066 12.2517 15.9736 12.4167 16.153 12.5835C17.4008 13.7402 18.0159 15.157 17.9997 16.8198C17.973 19.5216 15.8064 21.9233 13.015 22.3522C9.78007 22.8496 6.78899 20.9173 6.1368 17.8545C5.70049 15.8057 6.31561 14.0327 7.87098 12.5654C8.02898 12.4167 8.09661 12.2722 8.09596 12.0599C8.0888 9.64453 8.11677 7.22911 8.0836 4.81432C8.05889 3.02392 9.42504 1.37982 11.3621 1.05299C13.4324 0.703752 15.547 2.13184 15.8663 4.11957C15.9046 4.35925 15.9137 4.5983 15.9137 4.8386C15.9137 5.99588 15.9137 7.15316 15.9137 8.30982V8.31107ZM14.322 8.7873C14.322 8.00292 14.3285 7.21853 14.32 6.43476C14.3129 5.79854 14.361 5.16169 14.2875 4.52671C14.1653 3.47027 13.3134 2.66161 12.2178 2.55951C11.1287 2.45804 10.1006 3.12664 9.78852 4.14572C9.69424 4.45325 9.68318 4.77198 9.68383 5.09134C9.68513 7.57586 9.67733 10.0604 9.69163 12.5449C9.69424 12.9527 9.53363 13.2235 9.21956 13.4799C7.89699 14.5606 7.3742 15.9439 7.72402 17.5681C8.25657 20.0414 10.8653 21.4533 13.3772 20.6764C15.3968 20.052 16.6752 18.0499 16.3344 16.0572C16.1517 14.9902 15.6198 14.1199 14.7459 13.4432C14.4611 13.2228 14.3129 12.9707 14.3174 12.6071C14.3317 11.3341 14.3233 10.0604 14.3233 8.7873H14.322Z',
                                'M12.7982 10.2744C12.7982 11.4385 12.8021 12.6026 12.795 13.7674C12.7937 13.9554 12.8424 14.0556 13.0421 14.1266C14.2411 14.5561 15.0285 15.7862 14.8764 16.9647C14.706 18.2851 13.6676 19.2892 12.3274 19.4287C10.867 19.5806 9.54899 18.6941 9.20111 17.327C8.86104 15.9873 9.62117 14.614 10.9899 14.1172C11.17 14.0519 11.2103 13.9548 11.2097 13.7867C11.2051 11.4659 11.2097 9.14508 11.2038 6.82429C11.2032 6.48937 11.3235 6.23102 11.631 6.07228C12.1655 5.79587 12.793 6.16317 12.7963 6.75768C12.8021 7.92991 12.7982 9.10151 12.7982 10.2737V10.2744Z'
                            ]}
                        />}
                        {co2 && <DeviceData value={co2} valueSuffix='ppm' label='CO2 level'
                            iconPaths={[
                                'M21.9735 13.7456C21.8179 12.4021 21.0365 11.3829 19.6499 10.7172C19.5878 10.6871 19.5868 10.6853 19.5974 10.6213C19.6813 10.1163 19.6789 9.61843 19.5902 9.14042C19.3696 7.95334 18.7611 6.96021 17.7807 6.18929C16.7777 5.39982 15.6243 5 14.352 5C14.1805 5 14.0046 5.00751 13.8288 5.02209C12.1334 5.16346 10.785 5.90345 9.82194 7.22218C9.78099 7.27829 9.76172 7.27829 9.74727 7.27829C9.73089 7.27829 9.70872 7.27432 9.68078 7.26725C9.32042 7.17005 8.94802 7.12234 8.54189 7.12057H8.52262C7.4796 7.12057 6.47753 7.47577 5.7014 8.12078C4.92383 8.76711 4.44255 9.64715 4.34571 10.5983C4.33608 10.6915 4.31055 10.7255 4.21371 10.7733C3.61632 11.067 3.11191 11.4797 2.71446 11.9997C2.36181 12.4613 2.12863 13.0056 2.00241 13.663L2 13.6745V14.6234L2.00674 14.6429C2.00964 14.6517 2.01349 14.661 2.01686 14.6698C2.01975 14.6764 2.02312 14.6857 2.02409 14.6888C2.16187 15.6099 2.67351 16.4551 3.46457 17.0678C4.24069 17.6687 5.21964 18 6.22074 18H6.24821C7.72674 17.9912 9.29248 17.9867 11.1752 17.9867C12.6268 17.9867 14.1029 17.9894 15.5309 17.9916C16.2559 17.9929 16.981 17.9943 17.706 17.9951H17.7133C18.751 17.9951 19.6601 17.7084 20.4155 17.1434C20.9999 16.706 21.4291 16.1975 21.6912 15.6325C21.9571 15.059 22.052 14.4246 21.9735 13.7456ZM5.81413 11.1572L5.81173 11.1112C5.77752 10.4415 6.02081 9.80354 6.49776 9.31448C6.95977 8.84089 7.58848 8.55108 8.26777 8.49806C8.3487 8.49188 8.43108 8.48834 8.5125 8.48834C9.01306 8.48834 9.5271 8.60895 10.084 8.85723C10.1982 8.90804 10.2806 8.94471 10.362 8.94471C10.5282 8.94471 10.5884 8.81571 10.6645 8.6518C10.9093 8.12608 11.2364 7.68253 11.6372 7.33351C12.0482 6.97523 12.5497 6.70529 13.1278 6.53035C13.5012 6.41725 13.8904 6.36026 14.285 6.36026C15.1666 6.36026 16.0401 6.64565 16.7435 7.16343C17.4613 7.6918 17.9431 8.42428 18.0991 9.22568C18.2239 9.86539 18.1748 10.498 17.9522 11.1059C17.866 11.3414 17.9339 11.4912 18.1786 11.6065C18.3222 11.6741 18.4706 11.7315 18.6142 11.7876C18.8594 11.883 19.0906 11.9732 19.2992 12.107C20.0243 12.574 20.416 13.1788 20.4969 13.9563C20.5643 14.6075 20.336 15.2481 19.8533 15.7597C19.3647 16.2775 18.6753 16.5934 17.9618 16.6256C17.9243 16.6274 17.8867 16.6291 17.8496 16.6309C17.6935 16.6384 17.5321 16.6464 17.3746 16.6464H14.2874H13.1297H11.9721H11.9441C11.4262 16.6464 10.9083 16.6464 10.3899 16.6464C9.87204 16.6464 9.35415 16.6464 8.83577 16.6464C7.85778 16.6464 7.06432 16.6459 6.33878 16.6446C5.70526 16.6437 5.18543 16.5182 4.74992 16.2607C3.89623 15.7566 3.46601 15.0453 3.46987 14.1463C3.47468 13.0732 4.17421 12.1967 5.34104 11.8013C5.5535 11.7293 5.68165 11.686 5.75632 11.5826C5.82955 11.4814 5.82377 11.3661 5.81269 11.1572H5.81413Z'
                            ]}
                        />}
                    </div>
                    <div className="air-chart">
                        {data?.entities && <AirQualityChart data={data?.entities?.filter((entity: { type: string; }) => entity.type === 'IndoorEnvironmentObserved')} />}
                    </div></div>
            )}
        </>
    );
};

export default AirQualityAnalyzer;
