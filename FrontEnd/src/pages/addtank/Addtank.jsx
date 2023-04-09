import React, { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import './Addtank.css'
import { ThemeContext } from '../../App';
import { Autocomplete } from '@mui/material';
import { useNavigate } from 'react-router';
import Navbar from "../../components/Navbar/Navbar";

export default function Addfarm() {
  const [dis, setDis] = useState(false)
  const [tankName, setTankName] = useState("")
  const [location, setLocation] = useState("")
  const [phlevel, setPhlevel] = useState("")
  const [oxygen, setOxygen] = useState("")
  const [fish, setFish] = useState([]);
  const navigate = useNavigate();
  const handleAddFishName = () => {
    const fishNameInput = document.getElementById('fishNameInput');
    const fishName = fishNameInput.value;
    if (fishName) {
      setFish([...fish, { fishName }]);
      fishNameInput.value = '';
    }
  };
  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      tankName: tankName,
      fish: fish,
      location: location,
      phlevel: Number(phlevel),
      oxygen: Number(oxygen)
    }

    console.log(data)
    if (data.tankName || data.fish || data.location || data.phlevel > 0 && data.phlevel <= 7 || data.oxygen > 0 && data.oxygen <= 100) {


      fetch('https://marinefarms-production.up.railway.app/addtank', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          alert("Tank Added Successfully")
          navigate('/dashboard')
        }
        )
        .catch((error) => {
          console.error('Error:', error);
        }
        );


    }
    else {
      alert("Please Enter Valid Details")
    }
  }

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#4CE0D2', height: '20vh', width: '100vw', position: 'absolute', top: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => (setDis(true))} className='button2'><p>Add A New Tank</p><AddIcon sx={{ '& .MuiSvgIcon-root': { color: 'black', marginLeft: '15px', border: '2px black solid', borderRadius: '5px' }, '& .MuiSvgIcon-root:hover': { color: '#4CE0D2', borderColor: '#4CE0D2' } }} /></button>
        </div>
        <div style={{ zIndex: dis ? '1000000' : '0', display: dis ? 'flex' : 'none', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', position: 'absolute', height: 'fit-content', width: '90vw', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)', backgroundColor: 'white', top: '0' }}>
          <form onSubmit={handleSubmit} className='parent-form1'>
            <div>
              <h2>Enter Tank Name: </h2>
              <TextField
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{
                  style: { color: '#22AAA1' },
                }}
                variant='outlined'
                label="Tank Name"
                name='tname'
                required
                autoComplete='off'
                value={tankName}
                onChange={
                  (event) => {
                    setTankName(event.target.value)
                  }
                }
                sx={{
                  width: '40vw',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#4CE0D2'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4CE0D2',
                    },
                  },
                  '& .MuiOutlinedInput-root:hover': {
                    '& fieldset': {
                      borderColor: '#4CE0D2'
                    }
                  }
                }}
              />
            </div>
            <div>
              <input type="text" id="fishNameInput"
                style={{ width: '36vw', height: '40px', border: '2px solid #4CE0D2', borderRadius: '5px', outline: 'none', paddingLeft: '10px', marginTop: '20px', marginRight: '10px' }}
                placeholder='Enter Fish Name'
              />
              <button
                style={{ width: '55px', height: '40px', border: '2px solid #4CE0D2', borderRadius: '5px', outline: 'none', marginTop: '20px', marginRight: '10px', backgroundColor: '#4CE0D2' }}
                onClick={handleAddFishName}>+</button>
            </div>
            <ul>
              {fish.map((fishObj, index) => (
                <li key={index}>{fishObj.fishName}</li>
              ))}
            </ul>
            <div
              style={{ marginTop: '20px' }}
            >
              <h2>Location: </h2>
              <TextField
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{
                  style: { color: '#22AAA1' },
                }}
                variant='outlined'
                label="Location"
                name='tname'
                required
                autoComplete='off'
                value={location}
                onChange={
                  (event) => {
                    setLocation(event.target.value)
                  }
                }
                sx={{
                  width: '40vw',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#4CE0D2'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4CE0D2',
                    },
                  },
                  '& .MuiOutlinedInput-root:hover': {
                    '& fieldset': {
                      borderColor: '#4CE0D2'
                    }
                  }
                }}
              />
            </div>
            <div
              style={{ marginTop: '20px' }}
            >
              <h2>pH Level: </h2>
              <TextField
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{
                  style: { color: '#22AAA1' },
                }}
                variant='outlined'
                label="0-7"
                name='tname'
                required
                autoComplete='off'
                value={
                  phlevel < 0 ?
                    alert("pH Level cannot be less than 0")
                    : phlevel > 7 ?
                      alert("pH Level cannot be greater than 7")
                      : phlevel
                }
                onChange={
                  (event) => {
                    setPhlevel(event.target.value)
                  }
                }
                sx={{
                  width: '40vw',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#4CE0D2'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4CE0D2',
                    },
                  },
                  '& .MuiOutlinedInput-root:hover': {
                    '& fieldset': {
                      borderColor: '#4CE0D2'
                    }
                  }
                }}
              />
            </div>
            <div
              style={{ marginTop: '20px' }}
            >
              <h2>O2 Level: </h2>
              <TextField
                InputProps={{ style: { color: 'black' } }}
                InputLabelProps={{
                  style: { color: '#22AAA1' },
                }}
                variant='outlined'
                label="0-100%"
                name='tname'
                required
                autoComplete='off'
                value={
                  oxygen < 0 ?
                    alert("Oxygen Level cannot be less than 0")
                    : oxygen > 100 ?
                      alert("Oxygen Level cannot be greater than 100")
                      : oxygen
                }
                onChange={
                  (event) => {
                    setOxygen(event.target.value)
                  }
                }
                sx={{
                  width: '40vw',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#4CE0D2'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4CE0D2',
                    },
                  },
                  '& .MuiOutlinedInput-root:hover': {
                    '& fieldset': {
                      borderColor: '#4CE0D2'
                    }
                  }
                }}
              />
            </div>

            <div style={{ display: 'flex', marginTop: '20px' }}>
              <button className='button2'><p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.5rem' }}>Submit</p></button>
              <button className='button2' onClick={
                () => {
                  setDis(false)
                }
              }><p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.5rem' }}>Close</p></button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
