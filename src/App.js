import React from 'react';
import AppContext from './state/AppContext';
import LoginComponent from './components/login/login';
import NewsFeedComponent from './components/newsfeed/newsfeed';

function App() {

  const initalState = {
    showSignup:false,
    showLoginPage:true,
    showNewsFeed:false,
    user:{
      token:"",
      name:"",
      handle:"",
      email:"",
      id:""
    },
    alert:{
      show:false,
      message:"Hello world"
    },
    isLoading:false,
    posts:[],
    posts_loading:false,
    commentbox:{
      content:"",
      show:false,
      username:"",
      handle:""
    }
  }

  const reducer = (state, action) => {
    if (action.type === 'SHOW_LOGIN'){
      let newState = Object.assign({}, state);
      newState.showLoginPage = true;
      newState.showNewsFeed = false;
      return newState;
    }else if (action.type === 'SHOW_NEWSFEED'){
      let newState = Object.assign({}, state);
      newState.showLoginPage = false;
      newState.showNewsFeed = true;
      return newState;
    }else if (action.type === 'CLICK_SIGNUP_MODAL'){
      let newState = Object.assign({}, state);
      newState.showSignup = action.payload;
      return newState;
    }else if (action.type === 'DISPLAY_ALERT'){
      let newState = Object.assign({},state);
      newState.alert.show = action.payload.show;
      newState.alert.message = action.payload.message;
      return newState;
    }else if (action.type === 'SET_LOADING'){
      let newState = Object.assign({},state);
      newState.isLoading = action.payload;
      return newState;
    }else if (action.type === 'UPDATE_TOKEN'){
      let newState = Object.assign({},state);
      newState.user.token = action.payload.token;
      newState.user.id = action.payload.id;
      return newState;
    }else if (action.type === 'UPDATE_POSTS'){
      let newState = Object.assign({},state);
      newState.posts = action.payload;
      return newState;
    }else if (action.type === 'POSTS_LOADING'){
      let newState = Object.assign({},state);
      newState.posts_loading = action.payload;
      return newState;
    }else if (action.type === 'SHOW_COMMENT_BOX'){
      let newState = Object.assign({},state);
      newState.commentbox = action.payload;
      return newState;

    }
    return state;
  }

  let [state, dispatch] = React.useReducer(reducer, initalState);

  function Page(){
    if (state.showLoginPage){
      return <LoginComponent />
    }else{
      return <NewsFeedComponent />
    }
  }

  return (
    <AppContext.Provider value={{state, dispatch}}>
      <Page />
    </AppContext.Provider>
  );
}

export default App;
