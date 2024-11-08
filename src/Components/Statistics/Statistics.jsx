import Navbar from "../Navbar/Navbar";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const products = [
        { "id": 1, "category": "Laptop", "price": 1999.99 },
        { "id": 2, "category": "Laptop", "price": 1499.99 },
        { "id": 3, "category": "Laptop", "price": 1399.99 },
        { "id": 4, "category": "Laptop", "price": 1799.99 },
        { "id": 5, "category": "Accessories", "price": 49.99 },
        { "id": 6, "category": "Accessories", "price": 29.99 },
        { "id": 7, "category": "Accessories", "price": 39.99 },
        { "id": 8, "category": "Accessories", "price": 89.99 },
        { "id": 9, "category": "Smartwatch", "price": 399.99 },
        { "id": 10, "category": "Smartwatch", "price": 299.99 },
        { "id": 11, "category": "Smartwatch", "price": 229.99 },
        { "id": 12, "category": "Smartwatch", "price": 299.99 },
        { "id": 13, "category": "MackBook", "price": 999.99 },
        { "id": 14, "category": "MackBook", "price": 2499.99 },
        { "id": 15, "category": "MackBook", "price": 1799.99 },
        { "id": 16, "category": "MackBook", "price": 1799.99 }
      ];
      
    return (
        <div>
            <Navbar></Navbar>
            <div className="banner bg-[#9538E2] text-center text-white rounded-2xl pb-10">
                <h1 className="text-6xl font-semibold pt-10">Statistics</h1>
                <p className="py-8">
                    Explore the latest gadgets that will take your experience to the next level.
                    From smart devices to <br /> the coolest accessories, we have it all!
                </p>
            </div>
            <div className="w-10/12 mx-auto py-8">
            <LineChart data={products} width={600} height={300}>
                <XAxis dataKey="category"/>
                <YAxis dataKey="price"/>
                <Tooltip/>
                <Line dataKey="price" stroke="red"></Line>
            </LineChart>
            </div>
        </div>
    );
};

export default Statistics;