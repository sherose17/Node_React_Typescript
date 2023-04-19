import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add');
  };

  return (
    <Box
      className='searchform'
      style={{ marginTop: '15px' }}
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        '& .MuiFilledInput-root': {
          borderRadius: '25px',
          backgroundColor: '#fff',
          border: '2px solid #3f51b5',
          height: '55px',
        },
        '& .MuiFilledInput-underline:after': {
          borderColor: '#3f51b5',
        },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='filled-basic'
        label='Search'
        variant='filled'
        style={{ width: '50%', marginLeft: '50px' }}
      />

      <Button
        onClick={handleClick}
        variant='contained'
        style={{
          width: '20%',
          marginLeft: '150px',
          height: '55px',
          backgroundColor: '#3f51b5',
        }}
      >
        Add Employee
      </Button>
    </Box>
  );
}


/* import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
export default function Search() {
  const navigate = useNavigate();
  const handleClick=()=>{
   navigate("/add")
  }
  return (
    <Box className='searchform' style={{marginTop:"15px"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      
       <TextField id="filled-basic" label="Search" variant="filled" style={{width:"50%",marginLeft:"50px"}} /> 
 

      <Button onClick={handleClick} variant="contained" style={{width:"20%",marginLeft:"150px",height:"55px", backgroundColor: '#3f51b5' }} >Add Employee</Button>
    </Box>
  );
}  */