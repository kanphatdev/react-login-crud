import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Container from '@mui/material/Container';
import '../Form.css'
import { useNavigate } from 'react-router-dom';



function Login() {
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
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "username": inputs.username,
  "password": inputs.password,
  "expiresIn": 5400000
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/login", requestOptions)
  .then(response => response.json())
  .then(result => {
    if(result.status==='ok'){
      MySwal.fire({
        title: <h3>your login has been success</h3>,
        html: <p>enjoy your action</p>,
        icon: 'success'
      }).then((value)=>{
        localStorage.setItem('token', result.accessToken)
        navigate('/usertablecreate')
      })
    }else{
      MySwal.fire({
        title: <h3>your login has been failed</h3>,
        html: <p>please try again</p>,
        icon: 'error'
      }).then((value)=>{
        navigate('/')
      })
    }
  }

   )
  .catch(error => console.log('error', error));
    console.log(inputs);
  }

  return (
    <Container component="main" maxWidth="xs" className='centered '>
      <form onSubmit={handleSubmit}>

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


        <TextField
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"

        >
          Sign In
        </Button>
      </form>
    </Container>
  )
}

export default Login;
