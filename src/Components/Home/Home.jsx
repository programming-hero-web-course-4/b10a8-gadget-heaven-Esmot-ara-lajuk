import banner from '../../assets/banner.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className= 'banner bg-[#9538E2] text-center text-white p-14 pb-40 '>
                <h1 className='text-6xl px-5 font-semibold py-4'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories </h1>
                <p className='py-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <button className='btn rounded-[32px] text-purple-800 font-bold mb-10 px-6'>Shop Now</button>
            </div>
            <div>
                <img className='banner-img w-[1026px] h-[550px] mx-auto rounded-lg border  border-e-purple-300-500 p-5 ' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Home;