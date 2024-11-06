import { Outlet, useLoaderData } from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import Navbar from '../Navbar/Navbar';
import Categories from '../Categories';
import './Home.css'

const Home = () => {
    
  const categories = useLoaderData(); 

  return (
    <div className="m-10">
      {/* Banner Section */}
      <div className="banner bg-[#9538E2] text-center text-white rounded-2xl pb-40">
        <Navbar />
        <h1 className="text-6xl font-semibold pt-10">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories </h1>
        <p className="py-8">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to <br /> the coolest accessories, we have it all!
        </p>
        <button className="btn rounded-[32px] text-purple-800 font-bold mb-10 px-6">Shop Now</button>
      </div>
      <div>
        <img className="banner-img w-[1026px] h-[550px] mx-auto rounded-lg border border-e-purple-300-500 p-5" src={banner} alt="Banner" />
      </div>
      <div >
        <Categories categories={categories} /> 
        <Outlet />  
      </div>
    </div>
  );
};

export default Home;
