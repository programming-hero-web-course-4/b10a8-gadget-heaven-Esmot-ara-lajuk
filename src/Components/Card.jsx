import { Link, useNavigate } from "react-router-dom";

const Card = ({ gadget }) => {
    const navigate = useNavigate()
    const { id, title, product_img, category, price, rating, availability } = gadget || {};

    return (

       <Link to={`/gadget/${id}`}>
        <div class=" card card-compact bg-base-100 w-full shadow-xl">
            <figure>
                <img src={product_img} alt={title} className="w-[400px] h-48 object-cover" />
            </figure>
            <div class="card-body">
                <h2 class="card-title font-bold text-xl">{title}</h2>
                <p className="text-gray-600">{category}</p>
                <p className="text-lg font-semibold text-green-600">Price: ${price}</p>
                <div className="flex items-center">
                    Products Rating:
                    <span>{rating}</span>
                    <span className="mr-2 text-yellow-500"> ⭐</span>
                </div>
                <p className={`mt-2 ${availability ? 'text-green-600' : 'text-red-600'}`}>
                    {availability ? 'In Stock' : 'Out of Stock'}
                </p>
                <div class="card-actions">

                    <button class="btn text-white bg-[#9538E2] " onClick={() => navigate('/gadget/:id')}>View Details</button>
                </div>
            </div>
        </div></Link>


    );
};

export default Card;
