import { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
    const [gadgets, setGadgets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch('./Gadgets.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                return res.json();
            })
            .then(data => {
                setGadgets(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const categories = ["All", "Laptop", "Accessories", "Smartwatch", "MackBook", "I-phone"];

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredGadgets = selectedCategory === "All"
        ? gadgets
        : gadgets.filter(gadget => gadget.category === selectedCategory);

    if (loading) {
        return <p>Loading gadgets...</p>;
    }

    if (error) {
        return <p>Error loading gadgets: {error}</p>;
    }

    return (
        <div>
            <div className="flex space-x-4 mb-4">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`btn ${selectedCategory === category ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredGadgets.map(gadget => (
                    <Gadget gadget={gadget} key={gadget.id} />
                ))}
            </div>
        </div>
    );
};

export default Gadgets;
