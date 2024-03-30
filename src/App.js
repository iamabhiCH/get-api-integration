import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState([]);

    const APICall = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products");
            console.log(res.data.products);
            setData(res.data.products);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        APICall();
    }, []);

    return (
        <>
            <div>
                <h1>This is an API inegration. ( GET Method )</h1>
            </div>
            <div className="container">
                <div>
                    <ul>
                        {data.map((dt) => (
                            <li key={dt.id}>
                                <h2>Name : {dt.title}</h2>
                                <p>Description : {dt.description}</p>
                                <p>Price : {dt.price}</p>
                                <p>Discount : {dt.discountPercentage}%</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
