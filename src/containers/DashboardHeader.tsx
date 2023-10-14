import './DashboardHeader.css';

interface DashboardHeaderProps {
    name: string;
    earningPower: number;
    totalBalance: number;
}

const DashboardHeader = ({ name = 'John', earningPower = 1.21, totalBalance = 121 }: DashboardHeaderProps) => {
    return (
        <div className="dashboard-header">
            <h1>Hi, {name}</h1>
            <div className="staking-wrapper">
                <div className="staking-container">
                    <div className="staking-number">{earningPower} $BRC/day</div>
                </div>
                
            </div>
            <div className='staking-balance'><img src="./images/coin-flat.png" alt="$BRC" className="currency-icon" />{totalBalance}</div>
        </div>
    );
}

export default DashboardHeader;