
function handleLogin(email, password, callback){
  const emailReg = /[a-z,A-Z,0-9]+@[a-z,A-Z,0-9]+.(com|org|lk|inc)/g;
  if (emailReg.test(email) && password !== ""){
    fetch('https://gwitter-backend.herokuapp.com/login',
      {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email:email,
          password:password
        })
      }).then(res=>{
        res.json().then(val=>{
          callback(null,val);
        }).catch(err=>{
          callback("Server error in login",null);
        })
      }).catch(err=>{
        callback("Error in login to server", null);
      })
    }else{
      callback("Not a valid email/password", null)
    }
}

export default handleLogin;
