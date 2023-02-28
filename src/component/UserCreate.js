import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Container from '@mui/material/Container';
import '../Form.css'
import { useNavigate } from 'react-router-dom';



function UserCreate() {
  const [inputs, setInputs] = useState({});
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "fname": inputs.fname,
      "lname": inputs.lname,
      "username": inputs.username,
      "password": inputs.password,
      "email": inputs.email,
      "avatar": inputs.avatar
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.melivecode.com/api/users/create", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'ok') {
          MySwal.fire({

            html: <p>{result.message}</p>,
            icon: 'success'
          }).then((value) => {

            navigate('/usertablecreate')
          })
        } else {
          MySwal.fire({

            html: <p>{result.massage}</p>,
            icon: 'error'
          })
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <Container component="main" maxWidth="xs" className='centered '>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-lg-6'>
          <TextField
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
        />

          </div>
          <div className='col-lg-6'>
          <TextField
          type="text"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="password"
        />

          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6'>
         
        <TextField
          type="text"
          name="fname"
          value={inputs.fname || ""}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="fname"
          label="first name"
        />

          </div>
          <div className='col-lg-6'>
          <TextField
          type="text"
          name="lname"
          value={inputs.lname || ""}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lname"
          label="last name"
        />
          </div>
        </div>
   


      
       
        <TextField
          type="text"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="email"
        />
        <TextField
          type="text"
          name="avatar"
          value={inputs.avatar || ""}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="avatar"
          label="Avatar"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"

        >
          create
        </Button>
      </form>
    </Container>
  )
}

export default UserCreate;
