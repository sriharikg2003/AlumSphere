
function LogOut() {

  if (sessionStorage.getItem('token')) {
    sessionStorage.removeItem('useremail');
    sessionStorage.removeItem('token');
    console.log("Logged out succesfully")
    alert('Logged out succesfully')
  }

  else {
    console.log("No active user")
    alert('No active user')
  }


}

export default LogOut