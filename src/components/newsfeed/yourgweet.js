import React from 'react';
import AppContext from '../../state/AppContext';
import yourProfile from '../../assets/profile1.jpg';
import addNewPost from './effects/AddPost';

function YourGweet(){
  const {state, dispatch} = React.useContext(AppContext);

  function doPostGweet(e){
    e.preventDefault();
    const content = document.getElementById('txtYourPost').value;
    addNewPost(state, dispatch, content);
  }

  return (
    <div className="yourTweet">
      <div className="editor">
        <img src={yourProfile} alt="yourProfile"/>
        <input type="text" placeholder="What's happening?" id="txtYourPost"/>
      </div>
      <div>
        <button onClick={doPostGweet}>Gweet</button>
      </div>
    </div>
  );
}

export default YourGweet;
