import React from 'react';
import AppContext from '../../state/AppContext';
import './alert.css';

function Alert(props){
  const {state} = React.useContext(AppContext);

  let displayType = 'none';
  if (state.alert.show){
    displayType = 'block';
  }

  return (
    <>
      <div className="alert" style={{display:displayType}}>
        <div className="alert-body">
          <label>{state.alert.message}</label>
        </div>
      </div>
    </>
  );
}

export default Alert;
