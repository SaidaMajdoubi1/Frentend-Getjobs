import React , { useState , useEffect } from "react";
import axios from "axios";
import Editp from "./utils/editp"
import Cardprofile from "./utils/cardprofile"
import Aboutprofile from "./utils/aboutprofile";
import Experience from "./utils/experience";
import Education from "./utils/education";
import Skills from "./utils/skills";
import Contactbar from "./utils/contactbar";
import Socialbar from "./utils/socialbar";


function profile() {

  const [userData, setUserData] = useState();
  useEffect(() => {
    // Fetch user data when the component mounts
    const headers = { 'Authorization': 'Bearer my-token' };
    const fetchUserData = async () => {
        try {
            const response = await axios.get('URL_TO_YOUR_API_ENDPOINT',{headers});
            // Assuming your API returns user data in response.data
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    fetchUserData();

    // Clean up function
    return () => {
        // Perform cleanup if needed
    };
}, []); // Empty dependency array to fetch data only once when the component mounts
          

  return (<>
    <Editp/>   
    <Contactbar userData={userData}/>
    <Cardprofile userData={userData} /* isOwnProfile={userData.id === currentUserId}*/  />
    <Aboutprofile userData={userData} />
    <Socialbar userData={userData}/>
    <Experience userData={userData} />
    <Education userData={userData}/>
    <Skills userData={userData}/>
      
 </> )
}

export default profile