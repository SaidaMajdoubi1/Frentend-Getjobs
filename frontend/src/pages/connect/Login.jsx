import  { useState } from 'react'
import { Container, Left , Right , Rights , Title , Description , LogTitle ,LogInfo , ForgotPass , OrDiv , NewUser} from './Login.styles'
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import imgLogin from "../../assets/imgLogin.png"
import { Link } from 'react-router-dom';


const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    height : '45px',
    lineHeight: 1.5,
    backgroundColor: '#14b8a6',
    '&:hover': {
      backgroundColor: '#5eead4',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0d9488',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });



const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error , setError] = useState('');
  const navigate = useNavigate();


  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/v1/users/login', {
        userlogin: email,
        passlogin: password,
      });


      // Handle successful login here, e.g., redirect to another page
      console.log('Login successful', response.data);
      // Redirect to the home page
      console.log('data' , response.data.id);
      localStorage.setItem('userId', response.data.id);
      navigate('/');
    } catch (error) {
      // Handle login error here
      console.error('Login failed', error.response.data);
      setError('Invalid Username/Password');
    }
  };

  return (
    <Container>
        <Left>
            <Title>WELCOME TO   GetJOBs</Title>
            <Description><img src={imgLogin} alt="HI" /></Description>
            <Rights>2024 © GetJobs Technologies. All Rights Reserved.</Rights>
        </Left>
        <Right>
            <LogTitle>Log in to GetJobs</LogTitle>
            <LogInfo>Enter your email and password to log in</LogInfo>
            <p style={{ color : 'red' , fontWeight : 'bold' , margin : '18px 0' }} >{error}</p>
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: '30px 0' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        <BootstrapButton variant="contained" disableRipple onClick={handleLogin}>
            Login 
        </BootstrapButton>
        <ForgotPass>Forgot your password?</ForgotPass>

        <OrDiv>Or</OrDiv>
        <NewUser>New to GetJobs ?<br/><br/>
        <BootstrapButton variant="contained" disableRipple>
        <Link style={{ color : 'white'  , textDecoration : 'none'}} to="/signup"> Create an account </Link>
        </BootstrapButton>
        </NewUser>
      
        </Right>
    </Container>
  )
}

export default Login