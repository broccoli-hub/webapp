import DashboardBody from "../containers/DashboardBody";
import DashboardHeader from "../containers/DashboardHeader";

const Dashboard = () => {
    return (
        <>
            <DashboardHeader earningPower={1.21} name='John' totalBalance={213.757}/>
            <DashboardBody />
        </>
    )
}

export default Dashboard;