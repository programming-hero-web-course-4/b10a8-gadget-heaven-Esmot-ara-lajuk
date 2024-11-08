import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoreCartList } from '../utilty/addToD';  // Assuming this utility fetches stored cart items

const ListedGadget = () => {
    const [gadgetItem, setGadgetItem] = useState([]);
    const allGadget = useLoaderData();  // Get all gadgets from loader (assuming it's a list of gadgets)

    useEffect(() => {
        // Get the cart IDs from localStorage
        const storedCartList = getStoreCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));  // Convert to integers if needed

        // Filter gadgets that match the IDs in the cart
        const gadgetList = allGadget.filter(gadget => storedCartListInt.includes(gadget.id));

        setGadgetItem(gadgetList);  // Update state to display the gadgets in the cart
    }, [allGadget]);  // Dependency array ensures it re-renders when allGadget changes

    return (
        <div className='w-10/12 mx-auto text-center'>
            <h3 className="text-3xl">Listed Gadgets in Your Cart</h3>

            <div className="mt-6">
                {gadgetItem.length === 0 ? (
                    <p>No items in your cart.</p>
                ) : (
                    <ul>
                        {gadgetItem.map(gadget => (
                            <li key={gadget.id} className="border-b py-4">
                                <h2>{gadget.title}</h2>
                                <p>${gadget.price}</p>
                                <img src={gadget.product_img} alt={gadget.title} className="w-24 h-auto" />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ListedGadget;
