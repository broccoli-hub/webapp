
import AirQualityAnalyzer from '../components/devices/AirQualityAnalyzer';
import './DashboardBody.css';

const DashboardBody = () => {
    return (
        <div className="body">
            <div className="device-label">My devices</div>
            <AirQualityAnalyzer />
        </div>
    )
}

export default DashboardBody;