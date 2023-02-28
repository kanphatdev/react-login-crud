import React from 'react';
import '../App.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function AppbarCreate() {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/')
  }
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6">
            My App
          </Typography>


          <Button variant="contained" color="error" className='mx-2' onClick={Logout}>
            <span class="material-symbols-outlined">
              logout
            </span>
          </Button>
          <Button variant="contained" color="success" href='/adddata' className='mx-2'>
            <span class="material-symbols-outlined">
              person_add
            </span>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppbarCreate