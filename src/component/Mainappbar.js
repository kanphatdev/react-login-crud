import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import '../App.css'
function Mainappbar() {
  return (
    <div>
         <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">
            My App
          </Typography>

          <Button variant="contained" color="success" classNameName='mx-2' href='/Login'>
            <span className="material-symbols-outlined">
            login
            </span>
          </Button>
          <Button variant="contained" color="warning" href='/signup' classNameName='mx-3'>
            <span className="material-symbols-outlined">
              lock
            </span>
          </Button>
        
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Mainappbar