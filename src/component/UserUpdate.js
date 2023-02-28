import { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import '../Form.css'




function UserUpdate() {
  const {id} =useParams( )
  const [inputs, setInputs] = useState({});
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.melivecode.com/api/users/"+id, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status==='ok'){
          setInputs(result['user']['fname'])
          setInputs(result['user']['lname'])
          setInputs(result['user']['username'])
          setInputs(result['user']['password'])
          setInputs(result['user']['email'])
          setInputs(result['user']['avatar'])
        }

      })
      .catch(error => console.log('error', error));
  },[id]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <Container component="main" maxWidth="xs" className='centered '>
      <form onSubmit={handleSubmit}>
      <TextField
         onChange={handleChange}
         variant="outlined"
         margin="normal"
         required
         fullWidth
          id="outlined-required"
          label="Required"
          defaultValue={inputs.password }
          name='password'
          
        />
         <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="outlined-required"
          label="Required"
          defaultValue={inputs.username }
          name='username'
          type='text'
        />
         <TextField
         onChange={handleChange}
         variant="outlined"
         margin="normal"
         required
         fullWidth
         defaultValue={inputs.fname }
         name='fname'
        />
         <TextField
         onChange={handleChange}
         variant="outlined"
         margin="normal"
         required
         fullWidth
          id="outlined-required"
          label="Required"
          defaultValue={inputs.lname }
          name='lname'
        />
         <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="outlined-required"
          label="Required"
          defaultValue={inputs.email }
          name="email"
        />
        <TextField
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="outlined-required"
          label="Required"
          defaultValue={inputs.avatar }
          name="avatar"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"

        >
         Update
        </Button>
      </form>
    </Container>
  )
}

export default UserUpdate;
