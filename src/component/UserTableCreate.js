import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppbarCreate from '../component/appbarCreate';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function UserTableCreate() {
  
  const navigate = useNavigate();
  const Delete = id =>{
    

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": id
    });
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://www.melivecode.com/api/users/delete", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status === 'ok'){
          window.location.reload(true)  
          alert(result['message'])
        }else{
          alert(result['message']).then((value)=>{
            navigate('/usertablecreate')
          })

        }
      })
      .catch(error => console.log('error', error));
  }

  const [users, setUsers] = useState([]);
 

  useEffect(() => {
    axios.get('https://www.melivecode.com/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (

   <div>
    <div>
<AppbarCreate></AppbarCreate>
    </div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="user table">
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center" className='text-capitalize'>last Name</TableCell>
          <TableCell align="center" className='text-capitalize'>username</TableCell>
          <TableCell align="center" className='text-capitalize'>avatar</TableCell>
          <TableCell align='center' className='text-capitalize'>
            action
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(user => (
          <TableRow key={user.id}>
            <TableCell component="th" scope="row">
              {user.id}
            </TableCell>
            <TableCell align="center">{user.fname}</TableCell>
            <TableCell align="center">{user.lname}</TableCell>
            <TableCell align="center" className='center'>{user.username}</TableCell>
            <TableCell align="center">
              <Avatar alt="Remy Sharp" src={user.avatar} />

            </TableCell>

            <TableCell align='center'>
              <ButtonGroup variant="text" aria-label="ext button group" >
                <Button color='error' onClick={()=>Delete(user.id)}>
                  <span class="material-symbols-outlined">
                    delete
                  </span>
                </Button>
                <Button color='warning' href='/Editdata/:id'>
                  <span class="material-symbols-outlined">
                    edit
                  </span>
                </Button>

              </ButtonGroup>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
   </div>
   
  );
}

export default UserTableCreate;
