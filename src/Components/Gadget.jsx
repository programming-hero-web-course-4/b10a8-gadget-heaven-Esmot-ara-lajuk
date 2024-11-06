import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Gadget = () => {
    const {id,title}  = useParams()
    console.log(id)
    return (
        <div>
            <Navbar></Navbar>
            <div className="banner bg-[#9538E2] text-center text-white rounded-2xl pb-40">
        <h1 className="text-6xl font-semibold pt-10">Product Details </h1>
        <p className="py-8">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to <br /> the coolest accessories, we have it all!
        </p>
      </div>
      <div>
      </div>
            Gadgetsss...{id}
            {title}
        </div>
    );
};

export default Gadget;