import Banner from "../Banner/Banner";
import ListedGadget from "../ListedGadget";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
    return (
        <div>
           <Navbar></Navbar>
           <div className="banner bg-[#9538E2] text-center text-white rounded-2xl pb-10 ">
                <h1 className="text-6xl font-semibold pt-10">Dashboard </h1>
                <p className="py-8">
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to <br /> the coolest accessories, we have it all!
                </p>
            </div>
        </div>
    );
};

export default Dashboard;