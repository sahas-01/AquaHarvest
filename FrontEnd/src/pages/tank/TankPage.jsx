import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import User from "../../images/user.jpg"
import AlertCardMain from "../../components/alert-main/AlertCardMain";
import "./tankpage.css"
import Tank from "../../components/Tanks/Tank"
import data from "../../data/fishes"


const TankPage = () => {

  const fishes = data.map((data) => {
    return <Tank key={data.id} item={data} />
  })
  const { tankName } = useParams();
  const [tank, setTank] = useState({});
  return (
    <div>
      <Navbar />
      <div className="tanksContainer">
        <div className="left-div">
          <div className="left-div-top">
            <div className='user-info'>
              <h3>Hello User</h3>
              <img src={User} alt="profile" id='profile-pic' />
            </div>
            <div className='tank-info'>
              <div className='tanks'>
                <h3>Tanks</h3><br />
                <h3>5</h3>
              </div>
              <div className='Variety-info'>
                <h3>Varieties</h3><br />
                <h3>7</h3>
              </div>
            </div>
          </div>
          <div><AlertCardMain /></div>
        </div>
        <div className='right-div'>
          {fishes}
        </div>
      </div>
    </div>
  )
}

export default TankPage