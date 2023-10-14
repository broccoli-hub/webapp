import { useState } from "react";
import DashboardBody from "../containers/DashboardBody";
import DashboardHeader from "../containers/DashboardHeader";

import NFTBar from "../containers/NFTBar";

const Dashboard: React.FC = () => {
    const [earningPower, setEarningPower] = useState<number>(13);
    const [currentNFT, setCurrentNFT] = useState<number>(1);

    const adjustEarningPower = (value: number) => {
        setEarningPower(earningPower + value)
    }

    return (
        <>
            <DashboardHeader earningPower={earningPower} name='John' totalBalance={213.757}/>
            <NFTBar onChange={(nft: number) => setCurrentNFT(nft)}/>
            <DashboardBody adjustEarningPower={adjustEarningPower} currentNFT={currentNFT} />
        </>
    )
}

export default Dashboard;