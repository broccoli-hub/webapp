import { ReactNode } from "react";

import './Device.css';
import ToggleSwitch from "./ToggleSwitch";

interface DeviceComponentsProps {
    device: {
        customName?: string;
        type: string;
        location?: { // TODO: required location
            coordinates: string[];
        };
    };
    options: {
        isSingle?: boolean;
        isSwitch?: boolean;
    };
    children: ReactNode;
    onOptInToggle?: (checked: boolean) => void;
    callToAction?: string;
}

const DeviceComponent: React.FC<DeviceComponentsProps> = (props: DeviceComponentsProps) => {
    const deviceName = props.device.customName || 'Custom Name';
    const deviceType = props.device.type || 'Unknown';
    const innerNodes = props.children;

    return (
        <div className='device-box' style={props.options?.isSingle ? { width: '49%' } : {}}>
            {props.onOptInToggle &&
                <div className="device-top-right">
                    <ToggleSwitch isChecked={false} onToggle={props.onOptInToggle} />
                </div>
            }
            {!props.options.isSwitch &&
                <div className='device-info'>
                    <div>
                        <span className='device-name'>{deviceName}</span>
                        { props.callToAction && <button className="cta-button">{props.callToAction}</button> }
                    </div>
                    <span className='device-type'>{deviceType}</span>
                </div>
            }
            {innerNodes}
        </div>
    )
}

export default DeviceComponent