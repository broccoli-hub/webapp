import './DeviceData.css';

interface DeviceDataComponentProps {
    /**
     * SVG path to icons
     * @type {string}
     * @memberof DeviceDataComponentProps
     */
    iconPaths: string[];
    value: number;
    valueSuffix?: string;
    label: string;
}

const DeviceData: React.FC<DeviceDataComponentProps> = ({ value, valueSuffix, label, iconPaths }: DeviceDataComponentProps) => {
    return (
        <div className="data-box">
            <svg className='data-icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                { !!iconPaths.length && 
                    iconPaths.map((iconPath) => (
                        <path d={iconPath} fill='#F8F7F2' />
                    ))
                }
            </svg>
            <div className="data-details">
                <div className="data-value">
                    {Math.floor(value)} {valueSuffix || ''}
                </div>
                <div className="data-label">
                    {label}
                </div>
            </div>
        </div>
    )
}

export default DeviceData;