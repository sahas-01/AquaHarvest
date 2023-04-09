import React from 'react'
import "./tank.css"
import { Link } from 'react-router-dom'

const Tank = ({ item }) => {
    console.log(item)
    return (
        <div className='tank-container' style={{ fontFamily: "poppins" }}>
            <div className='heading'>
                <h2>{item.tankName}</h2>
                <div className='location'>{
                    item.location
                }</div>
            </div>
            <div className='info'>
                <div className='info-detail'>
                    <div>Varities:</div> <div>
                        {/* put a comma separated list of fish names here */}
                        {
                            item.fish.map((fish) => {
                                return fish.fishName + ", "
                            }
                            )
                        }
                    </div>
                </div>
                <div className='info-detail2'>
                    <div>pH Level:</div> <div>
                        {
                            item.phlevel
                        }
                    </div>
                </div>
                <div className='info-detail2'>
                    <div>O2 Level:</div> <div>{
                        item.oxygen
                    } %
                    </div>
                </div>
                {/* <Link to={`/tank/${props.item.name}`}>More..</Link> */}
            </div>
        </div>
    )
}

export default Tank