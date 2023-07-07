import React from 'react'
import  {Link} from "react-router-dom";

function NoPage() {
  return (
    <center >
    <div>
     <h1>404 ERROR</h1>
    <br />
    Requested Page Does Not Exist
      <br />
      <Link to="/">CLICK HERE TO GO BACK</Link>
    </div>
    </center>
  )
}

export default NoPage;