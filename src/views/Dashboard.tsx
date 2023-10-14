import DashboardBody from "../containers/DashboardBody";
import DashboardHeader from "../containers/DashboardHeader";

import NFTBar from "../containers/NFTBar";

const Dashboard = () => {
    return (
        <>
            <DashboardHeader earningPower={1.21} name='John' totalBalance={213.757}/>
            <NFTBar />
            <DashboardBody />
        </>
    )
}

export default Dashboard;