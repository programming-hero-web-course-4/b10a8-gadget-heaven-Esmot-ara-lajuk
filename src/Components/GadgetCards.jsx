import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
  const navigate = useNavigate()
  const data = useLoaderData();
  const { category } = useParams();

  const [gadget, setGadget] = useState([]); 

  useEffect(() => {
    
    if (data && data.length > 0) {
      console.log("Data Loaded:", data);
      if (!category) {
        
        setGadget(data);
      } else {
        const filteredByCategory = data.filter((gadget) => gadget.category === category);
        setGadget(filteredByCategory);
      }
    } else {
      setGadget(data.slice(0,16));
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 p-5 w-10/12 mx-auto">
      {gadget.length === 0 ? (
        <p>No products available in this category.</p>
      ) : (
        gadget.map((gadget) => (
          <Card key={gadget.id} gadget={gadget} />
        ))
      )}
    </div>
  );
};

export default GadgetCards;
