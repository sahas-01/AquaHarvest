import React, { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const ProdPage = () => {
  const [details, setDetails] = useState({
    name: '',
    age: '',
    contact: '',
    location: '',
    cardNo: '',
    cvv: '',
  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
    if (details.age < 18 || details.age > 60) {
      alert("Age should be between 18 and 60")
    }
    if (details.contact.length !== 10) {
      alert("Contact number should be of 10 digits")
    }
    if (details.cardNo.length !== 16) {
      alert("Card number should be of 16 digits")
    }
    if (details.cvv.length !== 3) {
      alert("CVV should be of 3 digits")
    }
    if (details.age >= 18 && details.age <= 60 && details.contact.length === 10 && details.cardNo.length === 16 && details.cvv.length === 3) {
      alert("Order Placed Successfully")
      navigate('/dashboard')
    }
  }

  return (

    <form onSubmit={handleSubmit} className='parent-form1' >

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* #22AAA1   #4CE0D2 */}
        <div style={{ width: '70vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
          <h4 className='mr-5'>Name: </h4>
          <TextField
            InputProps={{
              style: {
                color: 'black',
                marginLeft: '30px'
              }
            }}
            InputLabelProps={{
              style: {
                color: '#22AAA1',
                marginLeft: '30px'
              },
            }}
            variant='outlined'
            label="eg. John Doe"
            name='tname'
            required
            autoComplete='off'
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            sx={{
              width: '30vw',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4CE0D2',
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* #22AAA1   #4CE0D2 */}
        <div style={{ width: '70vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
          <h4 className='mr-5'>Age: </h4>
          <TextField
            InputProps={{
              style: {
                color: 'black',
                marginLeft: '35px'
              }
            }}
            InputLabelProps={{
              style: {
                color: '#22AAA1',
                marginLeft: '35px'
              },
            }}
            variant='outlined'
            label="eg. 21"
            name='tname'
            required
            autoComplete='off'
            value={
              details.age
            }
            onChange={(e) => setDetails({ ...details, age: e.target.value })}
            sx={{
              width: '31vw',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4CE0D2',
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* #22AAA1   #4CE0D2 */}
        <div style={{ width: '70vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
          <h4 className='mr-5'>Contact: </h4>
          <TextField
            InputProps={{
              style: {
                color: 'black',
                marginLeft: '30px'
              }
            }}
            InputLabelProps={{
              style: {
                color: '#22AAA1',
                marginLeft: '30px'
              },
            }}
            variant='outlined'
            label="Your ph.No"
            name='tname'
            required
            autoComplete='off'
            value={
              details.contact
            }
            onChange={(e) => setDetails({ ...details, contact: e.target.value })}
            sx={{
              width: '30vw',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4CE0D2',
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* #22AAA1   #4CE0D2 */}
        <div style={{ width: '70vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
          <h4 className='mr-5'>Location: </h4>
          <TextField
            InputProps={{
              style: {
                color: 'black',
                marginLeft: '30px'
              }
            }}
            InputLabelProps={{
              style: {
                color: '#22AAA1',
                marginLeft: '30px'
              },
            }}
            variant='outlined'
            label="eg. Vellore"
            name='tname'
            required
            autoComplete='off'
            value={details.location}
            onChange={(e) => setDetails({ ...details, location: e.target.value })}
            sx={{
              width: '30vw',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4CE0D2',
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* #22AAA1   #4CE0D2 */}
        <div style={{ width: '70vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
          <h4 className='mr-5'>Card No: </h4>
          <TextField
            InputProps={{
              style: {
                color: 'black',
                marginLeft: '30px'
              }
            }}
            InputLabelProps={{
              style: {
                color: '#22AAA1',
                marginLeft: '30px'
              },
            }}
            variant='outlined'
            label="XXXX-XXXX-XXXX-XXXX"
            name='tname'
            required
            autoComplete='off'
            value={
              details.cardNo
            }
            onChange={(e) => setDetails({ ...details, cardNo: e.target.value })}
            sx={{
              width: '30vw',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4CE0D2',
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
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        {/* #22AAA1   #4CE0D2 */}
        <div style={{ width: '70vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
          <h4 className='mr-5'>CVV: </h4>
          <TextField
            type='password'
            InputProps={{
              style: {
                color: 'black',
                marginLeft: '30px'
              }
            }}
            InputLabelProps={{
              style: {
                color: '#22AAA1',
                marginLeft: '30px'
              },
            }}
            variant='outlined'
            label="XXX"
            name='tname'
            required
            autoComplete='off'
            value={details.cvv}
            onChange={(e) => setDetails({ ...details, cvv: e.target.value })}
            sx={{
              width: '30vw',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#4CE0D2',
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
      </div>



      <button className='button2'><p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.5rem' }}>Submit</p></button>

    </form >
  )
}

export default ProdPage