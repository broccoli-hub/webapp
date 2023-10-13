import './DashboardHeader.css';

interface DashboardHeaderProps {
    name: string;
    earningPower: number;
    totalBalance: number;
}

const DashboardHeader = ({ name = 'John', earningPower = 1.21, totalBalance = 121 }: DashboardHeaderProps) => {
    return (
        <div className="header">
            <h1>Hi, {name}</h1>
            <div className="staking-wrapper">
                <div className="staking-container">
                    <div className="staking-number">{earningPower > 0 && '+'}{earningPower}%</div>
                </div>
                <span className='staking-balance-label'>BRC Total balance</span>
            </div>
            <div className='staking-balance'>${totalBalance}</div>
        </div>
    );
}

export default DashboardHeader;