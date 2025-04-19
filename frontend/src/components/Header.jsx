import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data here
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user'); // Replace '/api/user' with your actual API endpoint
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      // Implement your logout logic here
      // For example, clear local storage or send a logout request to the server
      // Here, let's assume you're clearing local storage
      localStorage.removeItem('token'); // Clear the authentication token from local storage
      // Redirect the user to the login page or do any other necessary actions
      window.location.href = '/'; // Redirect to the login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-yellow-200 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
      </div>
      <div className="flex items-center">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/jobcreate" className="mr-4">Jobs</Link>
        <Link to="/SearchComp" className="mr-4">Company</Link>
        <Link to="/SearchEploiyer" className="mr-4">Employee</Link>
      </div>
      <div className="flex items-left">
        <div className="mr-4">
          {userData && (
            <Link to="/profile">
              <img src={userData.avatar} alt="User Avatar" className="h-8 w-8 rounded-full" />
            </Link>
          )}
        </div>
        <button onClick={handleLogout} className="bg-green-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
