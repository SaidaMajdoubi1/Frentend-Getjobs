import   { useState } from 'react'
import { Container, Left , Right , Rights , Title , Description , LogTitle   , OrDiv , NewUser} from './Login.styles'
import TextField from '@mui/material/TextField';
import Button  from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import imgLogin from "../../assets/imgLogin.png";
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



const Signup = () => {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [userType , setUserType ] = useState('');
    const [error , setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
          if(email !== '' && password != '' && userName != ''){

          const response = await axios.post('http://localhost:3000/api/v1/users', {
            email: email,
            password: password,
            username : userName,
            userType : userType
          });
    
          // Handle successful login here, e.g., redirect to another page
          console.log('Signup successful', response.data);
          // Redirect to the home page
          navigate('/');
        }else{
        //   console.error('Signup failed', error.response.data);
          setError('Invalid Username/Password');
          console.log("error : "+error);
        }
        } catch (error) {
          // Handle login error here
          console.error('Signup failed', error.response.data);
          setError('Invalid Username/Password');
          console.log("error : "+error);
        }
      };

      const handleChange = (event) => {
        setUserType(event.target.value);
      };

  return (
    <Container>
        <Left>
            
        <Title>WELCOME TO   GetJOBs</Title>
            <Description><img src={imgLogin} alt="HI" /></Description>
            <Rights>2024 © GetJobs Technologies. All Rights Reserved.</Rights>
        </Left>
        <Right>
            <LogTitle>Sign up in Talent Hunter</LogTitle>
            {/* <LogInfo style={{ marginBottom : '-30px' }}>Enter your email and password to signu up</LogInfo> */}
            <p style={{ color : 'red' , fontWeight : 'bold' , margin : '18px 0' }} >{error}</p>
            <TextField style={{ marginBottom: '20px' }} 
                id="outlined-basic" 
                label="Username" 
                variant="outlined"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              required={true}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              style={{ margin: '30px 0' }}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

        <FormControl fullWidth style={{ marginBottom : '15px' }} >
          <InputLabel id="demo-simple-select-label">User Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userType}
            label="User Type"
            onChange={handleChange}
          >
            <MenuItem value="candidate">Candidate</MenuItem>
            <MenuItem value="recruiter">Recruteur</MenuItem>
        </Select>
        </FormControl>

        <BootstrapButton style={{ marginBottom : '20px' }} variant="contained" disableRipple onClick={handleSignUp}>
            Sign Up
        </BootstrapButton>

        <OrDiv>Or</OrDiv>
        <NewUser>Already have account in GetJobs?<br/><br/>
        <BootstrapButton variant="contained" disableRipple>
            <Link style={{ color : 'white'  , textDecoration : 'none'}} to="/Login"> Sign in into your account </Link>
        </BootstrapButton>
        </NewUser>
       
        </Right>
    </Container>
  )
}

export default Signup