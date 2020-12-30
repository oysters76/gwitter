
function handleSignup(username, handle, email, password, callback){

  const emailReg = /[a-z,A-Z,0-9]+@[a-z,A-Z,0-9]+.(com|org|lk|inc)/g;
  if (!emailReg.test(email)){
    callback("Enter valid email address", null);
    return;
  }else if (handle === "" || handle.length > 30){
    callback("Enter valid handle for user", null);
    return
  }else if (username === "" || username.length > 50){
    callback("Enter valid username")
    return;
  }else if (password === "") {
    callback("Enter valid password");
    return;
  }else{
    fetch('https://gwitter-backend.herokuapp.com/signin',
      {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username:username,
          password:password,
          email:email,
          handle:handle
        })
      }).then(res=>{
        res.json().then(val=>{
          console.log(val);
          callback(null,"Created an account!");
        }).catch(err=>{
          callback("Server error in signup",null);
        })
      }).catch(err=>{
        callback("Error in creating an account on server", null);
      })
  }
}

export default handleSignup;
