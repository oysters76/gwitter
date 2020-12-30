import React from 'react';
import AppContext from '../../state/AppContext';

import './login.css';
import BannerImg from '../../assets/banner2.jpg';
import LoginForm from './loginform';
import SignUp from './signup';
import Alert from '../alert/alert';
import Loader from '../loader/loader';

function LoginComponent(){

  const {state, dispatch} = React.useContext(AppContext);

  function showSignupModal(){
    dispatch({type:'CLICK_SIGNUP_MODAL', payload:true});
  }

  return (
    <>
      <div className="container">
        <div className="banner">
          <img src={BannerImg} alt="Leaf"/>
          <ul className="captions">
            <li><i className="material-icons" style={{fontSize:"2vw"}}>search</i> Follow your interests</li>
            <li><i className="material-icons" style={{fontSize:"2vw"}}>groups</i> Hear what people talk about</li>
            <li><i className="material-icons" style={{fontSize:"2vw"}}>sms</i> Join the conversation</li>
          </ul>
        </div>
        <div className="loginpanel">
          <LoginForm />
          <div className="punchLine">
              <i className="material-icons md-48">brightness_4</i>
              <label id="main">See what is happening in the world right now!</label>
              <label id="sub">Join Gwitter today.</label>
            </div>

          <div className="bottomPanel">
              <button id="signBtn" onClick={showSignupModal}>Sign up</button>
              <button id="logBtn">Log in</button>
          </div>
        </div>

        <SignUp show={state.showSignup}/>
        <Alert />
        <Loader show={state.isLoading}/>
      </div>

    </>
  );
}

export default LoginComponent;
