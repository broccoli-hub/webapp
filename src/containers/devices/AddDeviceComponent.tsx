import './AddDeviceComponent.css';

const AddDeviceComponent = () => {
    return (
        <div className="add-device-box" style={{ width: '48%', gap: '1rem' }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.125 17.525C23.6911 17.525 24.15 17.0661 24.15 16.5C24.15 15.9339 23.6911 15.475 23.125 15.475H14.525V6.875C14.525 6.30891 14.0661 5.85 13.5 5.85C12.9339 5.85 12.475 6.30891 12.475 6.875V15.475H3.875C3.30891 15.475 2.85 15.9339 2.85 16.5C2.85 17.0661 3.30891 17.525 3.875 17.525H12.475V26.125C12.475 26.6911 12.9339 27.15 13.5 27.15C14.0661 27.15 14.525 26.6911 14.525 26.125V17.525H23.125Z" fill="#0AE194" stroke="#0AE194" stroke-width="0.3" />
            </svg>
            <div className="add-text">Add<br/>new device</div>
        </div>
    );
}

export default AddDeviceComponent;
