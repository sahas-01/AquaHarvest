import React, { useState, useEffect } from 'react'
import AlertCardMain from '../../components/alert-main/AlertCardMain'
import Navbar from '../../components/Navbar/Navbar'
import User from "../../images/user.jpg"
import "./dashboard.css"
import data from "../../data/tanks"
import Tank from "../../components/Tanks/Tank"
import Modal from "../../components/modal/Modal"
const Dashboard = () => {
  const [tankData, setTankData] = useState([])
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  // const [modal, setModal] = useState(false)
  // console.log(process.env.REACT_APP_API_URL)
  let count1 = 0;
  let count2 = 0;
  useEffect(() => {
    const getTankDetails = async () => {
      const data = await fetch(`http://localhost:8080/getalltank`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const tankDetails = await data.json()
      // console.log(tankData)
      setTankData(tankDetails)

    }
    getTankDetails()
  }, [])
  const tanks = tankData.map((data) => {
    return <Tank key={data.id} item={data}
    />
  })
  return (
    <>
      <div className='nav'><Navbar /></div>
      <div className='dashboard-container'>
        <div className='left-div'>
          <div className='left-div-top'>
            <div className='user-info'>
              <h3>Hello {
                user.name
              }</h3>
              {/* <img src={User} alt="profile" id='profile-pic' /> */}
            </div>
            <div className='tank-info'>
              <div className='tanks'>
                <h3>Tanks</h3><br />
                <h3>{
                  tankData.length
                }
                </h3>
              </div>
              <div className='Variety-info'>
                <h3>Varieties</h3><br />
                <h3>
                  {
                    tankData.map((data) => {
                      return data.fish.length
                    }).reduce((a, b) => a + b, 0)

                  }
                </h3>
              </div>
            </div>
          </div>
          <div
            style={{
              marginLeft: "2rem",
              color: "#fff",
              marginTop: "1rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            pH Level:
            {
              tankData.length > 0 ?
                tankData.map((data) => {
                  count1 = count1 + data.phlevel
                  // return count
                })
                : null

            }
            {
              tankData.length > 0 ? <div>
                {
                  count1 / tankData.length > 5 ? <div style={{
                    color: "green",
                  }}>Normal Tank Profile</div> : <div style={{
                    color: "red"
                  }}>Tank is acidic, need some repairs, adjust fish accordingly</div>
                }
              </div> : null
            }
          </div>
          <div
            style={{
              marginLeft: "2rem",
              color: "#fff",
              marginTop: "1rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Oxygen Level:
            {
              tankData.length > 0 ?
                tankData.map((data) => {
                  count2 = count2 + data.oxygen
                  // return count
                })
                : null
            }
            {
              tankData.length > 0 ? <div>
                {
                  count2 / tankData.length > 60 ? <div
                    style={{
                      color: "green",
                    }}
                  >Oxygen rich profile</div> : <div
                    style={{
                      color: "red",
                    }}
                  >Poor oxygen levels,replace some fish</div>
                }
              </div> : null
            }
          </div>
          <button
            style={{
              marginLeft: "2rem",
            }
            }
            onClick={
              () => {
                window.location.href = "/addTank"
              }
            }

          >Load new tank</button>
        </div>
        <div className='right-div'>
          {
            tanks.length > 0 ? tanks : <div style={{ color: "#fff", fontSize: "2rem", fontWeight: "bold" }}>No tanks found</div>
          }
        </div>
      </div>
    </>
  )
}

export default Dashboard