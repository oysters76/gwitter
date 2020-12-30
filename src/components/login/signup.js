import React from 'react';
import AppContext from '../../state/AppContext';
import handleSignup from '../../handlers/SignUpHandle';
import './signup.css';


function SignUp(props){
  let blockType = 'none';
  if (props.show){
    blockType = 'block';
  }
  const {dispatch} = React.useContext(AppContext);

  function getValue(id){
    return document.getElementById(id).value;
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

  function doSignUp(){
    //username, handle, email, password, callback
    const username = getValue('txtUsername');
    const handle   = getValue('txtHandle');
    const email    = getValue('txtEmailAddress');
    const password = getValue('txtSignupPassword');

    console.log(username,handle,email,password);
    handleSignup(username, handle, email, password, (err,result)=>{
      console.log(result);
        if (result!=null){
          showMessage("You have created an account!");
          dispatch({type:'CLICK_SIGNUP_MODAL', payload:false});
        }else{
          showMessage(err);
        }
    });

  }

  return (
    <>
    <div className="modal" style={{display:blockType}}>
      <div className="modal-content">
        <div className="top-row">
          <i className="material-icons">brightness_4</i>
          <button onClick={doSignUp}>Sign Up</button>
        </div>
        <div className="form-panel">
          <label id="heading">Create your account</label>
          <div className="inputbox">
            <div className="top">
              <label>Your Name</label>
              <label id="counter">0/50</label>
            </div>
            <input type="text" id="txtUsername"/>
          </div>
          <div className="inputbox">
            <div className="top">
              <label>Handle (Username)</label>
            </div>
            <input type="text" id="txtHandle"/>
          </div>
          <div className="inputbox">
            <div className="top">
              <label>Email Address</label>
            </div>
            <input type="text" id="txtEmailAddress"/>
          </div>
          <div className="inputbox">
            <div className="top">
              <label>Password</label>
            </div>
            <input type="password" id="txtSignupPassword"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;
