import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import fishes from '../../data/fishes.json'

const PopularFishes = () => {
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
                    >Popular fishes near me</h2>
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