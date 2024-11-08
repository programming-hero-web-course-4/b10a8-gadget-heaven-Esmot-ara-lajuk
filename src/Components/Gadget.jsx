import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import { addToStoredCartList } from '../utilty/addToD';  // Assuming this is your utility to add items to localStorage

const Gadget = () => {
    const { id } = useParams();
    const gadgetId = parseInt(id);
    const data = useLoaderData();
    
    // Find the gadget based on the id from the URL
    const gadget = data.find(gadget => gadget.id === gadgetId);
    
    // If gadget is not found, display a message or redirect
    if (!gadget) {
        return <div>Gadget not found!</div>;
    }

    const { id: currentGadgetID, title, product_img, price, availability, description, rating } = gadget;

    const handelAddToCart = (id) => {
        addToStoredCartList(id);  // Add the product to the cart in localStorage
    };

    return (
        <div>
            <Navbar />
            <div className="banner bg-[#9538E2] text-center text-white rounded-2xl pb-20 relative">
                <h1 className="text-6xl font-semibold pt-10">Product Details</h1>
                <p className="py-8">
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to <br /> the coolest accessories, we have it all!
                </p>
            </div>

            <div className="card card-side bg-base-100 shadow-xl w-10/12 mx-auto relative bottom-[100px]">
                <figure>
                    <img src={product_img} alt={title} className="w-full h-auto" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <h2 className="card-title text-xl">${price}</h2>

                    <p className={`mt-2 border border-green-500 rounded-2xl text-center w-20 ${availability ? 'text-green-600' : 'text-red-600'}`}>
                        {availability ? 'In Stock' : 'Out of Stock'}
                    </p>
                    
                    <p className="mt-4">{description}</p>
                    
                    <div className="flex card-title items-center mt-4">
                        Products Rating:
                        <span>{rating}</span>
                        <span className="mr-2 text-yellow-500">⭐</span>
                    </div>

                    <div className="card-actions mt-6">
                        <button
                            onClick={() => handelAddToCart(currentGadgetID)}
                            className="btn border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] hover:text-white transition duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gadget;
