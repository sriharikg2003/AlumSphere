import React, { useEffect, useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import Axios from "axios";

function Connect() {
  const [profileArray, setProfileArray] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/getProfiles')
      .then((response) => {
        let updatedProfileArray = [];
        for (let i in response.data.profiles) {
          if (response.data.profiles[i].name) {
          updatedProfileArray.push({
            name: response.data.profiles[i].name,
            yearOfJoin: response.data.profiles[i].yearOfJoin,
            location: response.data.profiles[i].location,
            facebook: response.data.profiles[i].facebook,
            twitter: response.data.profiles[i].twitter,
            instagram: response.data.profiles[i].instagram,
            linkedIn: response.data.profiles[i].linkedIn,
          })};
        }
        setProfileArray(updatedProfileArray);
      })
      .catch((err) => console.log(err));
  }, []);


  if (profileArray.length > 0 )
  return (
    <div>
      <div className="profile-container">
        {profileArray.map((item, index) => (
          <ProfileCard
            key={index}
            name={item.name}
            yearOfJoin={item.yearOfJoin}
            location={item.location}
            facebook={item.facebook}
            twitter={item.twitter}
            instagram={item.instagram}
            linkedIn={item.linkedIn}
          />
        ))}
      </div>
    </div>
  );

  else{
    <div className="profile-container">
        <h1>No Profiles Available Yet</h1>
    </div>
  }
}

export default Connect;
