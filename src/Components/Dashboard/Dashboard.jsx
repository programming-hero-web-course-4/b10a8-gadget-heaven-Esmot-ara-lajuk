import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Banner title={'Dashboard'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Banner>
        </div>
    );
};

export default Dashboard;