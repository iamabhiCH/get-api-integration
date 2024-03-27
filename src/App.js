import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [data, setData] = React.useState();

    const APICall = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/products");
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        APICall();
    }, []);

    return (
        <div>
            <p>This is an API inegration. ( GET Method )</p>
        </div>
    );
}

export default App;
