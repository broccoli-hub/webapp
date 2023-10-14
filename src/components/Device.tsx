import { ReactNode } from "react";

import './Device.css';

interface DeviceComponentsProps {
    device: {
        customName?: string;
        type: string;
        location?: { // TODO: required location
            coordinates: string[]
        }
    }
    options: {
        isSingle?: boolean
        isSwitch?: boolean
    }
    children: ReactNode
}

const DeviceComponent: React.FC<DeviceComponentsProps> = (props: DeviceComponentsProps) => {
    const deviceName = props.device.customName || 'Custom Name';
    const deviceType = props.device.type || 'Unknown';
    const innerNodes = props.children;

    return (
        <div className='device-box' style={props.options?.isSingle ? { width: '48%', gap: '1rem' } : {}}>
            {!props.options.isSwitch &&
                <div className='device-info'>
                    <span className='device-name'>{deviceName}</span>
                    <span className='device-type'>{deviceType}</span>
                </div>
            }
            {innerNodes}
        </div>
    )
}

export default DeviceComponent