import React, { useState, useRef, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
// import './Addtank.css'

const Modal = () => {

    const handleSubmit = () => {
        console.log('submitted')
    }

    return (

        <form onSubmit={handleSubmit} className='parent-form1'>
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                position: 'absolute',
                top: '50%',
                left: '50%',
                backfaceVisibility: 'hidden',
                backgroundBlur: '10px',
            }}>
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
                    // value={state.tname}
                    // onChange={handleChange}
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
                {/* #22AAA1   #4CE0D2 */}
                <div style={{ width: '40vw', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '30px' }}>
                    <label style={{ fontSize: '1.3rem', width: '50%' }}>Enter number of fishes:</label>
                    <select id='number-of-fishes' name='ftype' style={{ width: '50%', borderColor: '#22AAA1', height: '50px', borderRadius: '5px' }}>
                        <option value={1} style={{ backgroundColor: '#22AAA1', color: 'black' }}>1</option>
                        <option value={2} style={{ backgroundColor: '#22AAA1', color: 'black' }}>2</option>
                        <option value={3} style={{ backgroundColor: '#22AAA1', color: 'black' }}>3</option>
                        <option value={0} style={{ backgroundColor: '#22AAA1', color: 'black' }}>0</option>
                    </select>
                </div>
            </div>
            <button className='button2'><p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '1.5rem' }}>Submit</p></button>

        </form>
    )
}

export default Modal