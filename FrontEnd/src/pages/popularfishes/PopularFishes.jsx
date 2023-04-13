import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import fishes from '../../data/fishes.json'
import { useState, useEffect } from "react";

const PopularFishes = () => {
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=08516324a15845809abde48deca5c65b")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCity(data.city);
                setState(data.region);
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div className="onb-container">
            <Navbar />
            <div className="firstPara"></div>
            <div className="links">
                <div className="flex flex-row">
                    <h2
                        style={{
                            textAlign: "center",
                        }}
                    >Popular fishes in Vellore</h2>
                    {fishes.map((fish) => (
                        <div key={fish.name} className="LoadTank">
                            <img src={fish.imgUrl} alt="" width={100} />
                            <h1>{fish.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularFishes