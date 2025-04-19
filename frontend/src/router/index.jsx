import {createBrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "../pages/Home";
import Login from "../pages/connect/Login";
import Signup from "../pages/connect/Signup";
import Layout from "../layouts/Layout";
import Profile from '../pages/profile_user/profile'
import Editprofile from '../pages/profile_user/setting/editprofile'
import  Jobcreate from '../pages/search_jobs/jobcreate'
//import Job from "../pages/search_jobs/job";
import SearchEploiyer from "../pages/searchEmploiyer/SearchEploiyer";
import SearchComp from "../pages/searchCompany/SearchComp";

export const router = createBrowserRouter([
   
  {
    path: "/",
    element:<Home />,
  }, {
    path: "/login",
    element:<Login />,
  } , {
    path: "/signup",
    element:<Signup />,
  } ,{
        element: <Layout/>,
        children: [
    {
    path : '/profile',
    element : <Profile />
  },
  {
    path : "/useredit",
     element : <Editprofile />
  },
  {
     path : "/jobcreate",
   element : <Jobcreate/>
  },
  {
    path : "/SearchEploiyer",
  element : <SearchEploiyer/>
 },
 {
  path : "/SearchComp",
element : <SearchComp/>
},
  
  //{
  //   path: "/myjobs",
  //   element : <Jobs />
  // },{
  //   path: "/jobcandidates",
  //   element : <JobCandidates />
  // }

]}]);



// import React, { useState } from 'react';    -------------------------------------------------------  token---------------------------------------------
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// // Dummy authentication function
// const authenticate = () => {
//     // Perform authentication logic here and return true if authenticated, false otherwise
//     return localStorage.getItem('token') !== null;
// };

// // Dummy login function
// const login = () => {
//     // Perform login logic here and store token in local storage
//     localStorage.setItem('token', 'YOUR_TOKEN_HERE');
// };

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//         authenticate() ? <Component {...props} /> : <Redirect to='/login' />
//     )} />
// );

// const HomePage = () => <h1>Home Page</h1>;
// const LoginPage = () => <button onClick={login}>Login</button>;

// const App = () => {
//     return (

//         <Router>
//             <div>
//                 <Route exact path="/login" component={LoginPage} />
//                 <PrivateRoute exact path="/" component={HomePage} />
//             </div>
//         </Router>
//     );
// };

// export default App;
