

import React, { useState } from 'react';
import axios from 'axios';
import FormComponent from './FormComponent';
import "./BioData.css"
import { useEffect } from 'react';

function Form(props) {

  const [email, setEmail] = useState(sessionStorage.getItem('useremail'));
  const [name, setName] = useState(null);
  const [branch, setBranch] = useState(null);
  const [age, setAge] = useState(null);
  const [role, setRole] = useState(null);
  const [yearOfJoin, setYearOfJoin] = useState(null);
  const [yearOfGrad, setYearOfGrad] = useState(null);
  const [course, setCourse] = useState(null);
  const [department, setDepartment] = useState(null);
  const [linkedIn, setLinkedIn] = useState(null);
  const [facebook, setFacebook] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [homeTown, setHomeTown] = useState(null);
  const [companyUniversity, setCompanyUniversity] = useState(null);
  const [profession, setProfession] = useState(null);
  const [skills, setSkills] = useState(null);
  const [aboutMe, setAboutMe] = useState(null);
  const [contact, setContact] = useState(null);
  const [images, setImages] = useState("https://img.freepik.com/premium-vector/icon-mans-face-with-light-skin_238404-886.jpg");


  useEffect(() => {
    const fetchData = async () => {
      console.log(sessionStorage.getItem('useremail'));
      try {
        const response = await axios.get('http://localhost:3001/biodata', {
          params: { email: sessionStorage.getItem('useremail') }
        });

  setName(response.data.name)
  setBranch(response.data.branch)
  setAge(response.data.age)
  setRole(response.data.role)
  setYearOfJoin(response.data.yearOfJoin)
  setYearOfGrad(response.data.yearOfGrad)
  setCourse(response.data.course)
  setDepartment(response.data.department)
  setLinkedIn(response.data.linkedIn)
  setFacebook(response.data.facebook)
  setTwitter(response.data.twitter)
  setInstagram(response.data.instagram)
  setCurrentLocation(response.data.currentLocation)
  setHomeTown(response.data.homeTown)
  setCompanyUniversity(response.data.companyUniversity)
  setProfession(response.data.profession)
  setSkills(response.data.skills)
  setAboutMe(response.data.aboutMe)
  setContact(response.data.contact)

      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);
  


  if (sessionStorage.getItem('useremail')){

    const uploadProfilePicture = "https://t4.ftcdn.net/jpg/02/83/72/41/360_F_283724163_kIWm6DfeFN0zhm8Pc0xelROcxxbAiEFI.jpg";
  
  
  
    const handleSubmit = async () => {
  
      const formData = {
        'email': email,
        'name': name,
        'branch': branch,
        'age': age,
        'role': role,
        'yearOfJoin': yearOfJoin,
        'yearOfGrad': yearOfGrad,
        'course': course,
        'department': department,
        'linkedIn': linkedIn,
        'facebook': facebook,
        'twitter': twitter,
        'instagram': instagram,
        'currentLocation': currentLocation,
        'homeTown': homeTown,
        'companyUniversity': companyUniversity,
        'profession': profession,
        'skills': skills,
        'aboutMe': aboutMe,
        'contact': contact,
  
      }
      console.log(formData);
  
      try {
        await axios.patch('http://localhost:3001/updateBio', formData);
        alert('Updated successfully');
  
  
      } catch (error) {
        console.error('Error:', error);
        alert('Try Again');
      }
    };
  

    return (
      <div className="profile-page">

        <div className="biodata-container">



          <img src={images} className="profile-image-biodata" />

          <img src={uploadProfilePicture} alt="Upload Picture" className='profile-pic-upload-img'></img>



        </div>


        <div className='profile-form-data'>


          <FormComponent title="Name" onChange={(event) => setName(event.target.value)} value={name} />
          <FormComponent title="Contact No" onChange={(event) => setContact(event.target.value)} value={contact} />
          <FormComponent title="Branch" onChange={(event) => setBranch(event.target.value)} value={branch} />
          <FormComponent title="Age" onChange={(event) => setAge(event.target.value)} value={age} />
          <FormComponent title="Role/Designation" onChange={(event) => setRole(event.target.value)} value={role} />
          <FormComponent title="Year of Joining" onChange={(event) => setYearOfJoin(event.target.value)} value={yearOfJoin} />
          <FormComponent title="Year of Graduation" onChange={(event) => setYearOfGrad(event.target.value)} value={yearOfGrad} />
          <FormComponent title="Course/Degree" onChange={(event) => setCourse(event.target.value)} value={course} />
          <FormComponent title="Department" onChange={(event) => setDepartment(event.target.value)} value={department} />
          <FormComponent title="LinkedIn" onChange={(event) => setLinkedIn(event.target.value)} value={linkedIn} />
          <FormComponent title="Facebook" onChange={(event) => setFacebook(event.target.value)} value={facebook} />
          <FormComponent title="Twitter" onChange={(event) => setTwitter(event.target.value)} value={twitter} />
          <FormComponent title="Instagram" onChange={(event) => setInstagram(event.target.value)} value={instagram} />
          <FormComponent title="Current Location" onChange={(event) => setCurrentLocation(event.target.value)} value={currentLocation} />
          <FormComponent title="Home Town" onChange={(event) => setHomeTown(event.target.value)} value={homeTown} />
          <FormComponent title="Company/University" onChange={(event) => setCompanyUniversity(event.target.value)} value={companyUniversity} />
          <FormComponent title="Profession" onChange={(event) => setProfession(event.target.value)} value={profession} />
          <FormComponent title="Skills" onChange={(event) => setSkills(event.target.value)} value={skills} />
          <FormComponent title="About Me" onChange={(event) => setAboutMe(event.target.value)} value={aboutMe} />


        </div>

        <button type="button" className="btn btn-primary btn-block biodata-btn" onClick={handleSubmit}>
          Update
        </button>
      </div>


    );

    }
  else {
    return (
      <div> <center><h1>PLEASE SIGN IN</h1> </center></div>)
  }
}

export default Form;
