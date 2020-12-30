import React from 'react';
import AppContext from '../../state/AppContext';
import handleLogin from '../../handlers/LoginHandle';
import './login.css';


function LoginForm(){

  const {dispatch} = React.useContext(AppContext);

  function doLogin(e){
    e.preventDefault();
    let email = document.getElementById('txtEmail').value;
    let password = document.getElementById('txtPassword').value;
    dispatch({type:'SET_LOADING', payload:true});
    handleLogin(email, password, (err, result)=>{
      dispatch({type:'SET_LOADING', payload:false});
      if (result != null){
        if (result.status === false){
          showMessage("Wrong email/password");
        }else{
          console.log(result.token);
          dispatch({type:'UPDATE_TOKEN', payload:{
            token:result.token,
            id:result.id
          }});
          dispatch({type:'SHOW_NEWSFEED'});
        }
      }else{
        showMessage(err);
      }
    });

  }

  function showMessage(message){
    dispatch({type:'DISPLAY_ALERT', payload:{
      message:message,
      show:true
    }});
    setTimeout(()=>{
      dispatch({type:'DISPLAY_ALERT', payload:{
        message:'',
        show:false
      }});
    },1000);
  }

  return (
    <>
         <form onSubmit={doLogin}>
          <div className="formcontrol">
            <label id="emailField">Email</label>
            <input type="text" id='txtEmail'/>
          </div>
          <div className="formcontrol">
            <label id="passwordField">Password</label>
            <input type="password" id='txtPassword'/>
          </div>
          <button type="submit">Log in</button>
        </form>
    </>
  );
}

export default LoginForm;
