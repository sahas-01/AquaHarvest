import React, { useState, useEffect } from 'react';
import './marketplace.css';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Button, CardMedia } from '@mui/material';
import { InputAdornment } from '@mui/material';
import searchIcon from '../../assets/frame71.svg';
import Navbar from '../../components/Navbar/Navbar'
import data from "../../data/marketdata"
import MediaCard from '../../components/card/MediaCard'
import { useNavigate } from 'react-router-dom';
export default function Marketplace(props) {
  const navigate = useNavigate();
  const [marketData, setMarketData] = useState([])
  // console.log(process.env.REACT_APP_API_URL)
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      alert("Please login to continue")
      navigate("/signin")
    }
    const getMarketDetails = async () => {
      const data = await fetch(`http://localhost:8080/getfish`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const marketDetails = await data.json()
      console.log(marketDetails)
      setMarketData(marketDetails)

    }
    getMarketDetails()
  }, [])
  console.log(marketData)
  const marketdata = marketData.map((data) => {
    return <MediaCard key={data.id} item={data} />
  })
  const [value, setValue] = useState('');
  function handleChange(event) {
    setValue((preValue) => {
      return {
        ...preValue,
        value
      }
    })
    {/* console.log(value) */ }
  }
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
        <div style={{ width: '87vw', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: "column" }}>
          <TextField
            name='Name'
            autoComplete='off'
            onChange={handleChange}
            sx={{
              width: '75%',
              paddingTop: '30px',
              paddingLeft: '80px',
              display: 'flex',
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #FFFFFF;',
                '& fieldset': {
                  borderColor: 'white'
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white'
                },
              },
              '& .MuiOutlinedInput-root:hover': {
                '& fieldset': {
                  borderColor: 'white'
                }
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <button style={{
                    background: 'transparent', border: 'none', display: 'flex', position: 'relative', right: '35px', zIndex: '10000000'
                  }}>
                    <img style={{ height: '48px' }} src={searchIcon}></img>
                  </button>
                </InputAdornment>),
              style: { color: 'black' }
            }}
            InputLabelProps={{
              style: { color: 'white' },
            }}
            variant='outlined'
            label=''
            id="outlined-basic" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: ' 2.5rem' }}>
          {marketdata}
        </div>
      </div>
    </>
  )
}
