import React from 'react';
import AppContext from '../../state/AppContext';
import fetchAllPosts from './effects/FetchPosts';
import LikePost from './effects/LikePost';

import SidePanel from './sidepanel';
import SearchBar from './searchbar';
import YourGweet from './yourgweet';
import Posts from './posts';
import CommentBox from './comment/comment';
import openCommentBox from './effects/OpenCommentBox';

import './newsfeed.css';

function NewsFeedComponent(){
  const {state, dispatch} = React.useContext(AppContext);

  React.useEffect(()=>{
    fetchAllPosts(state, dispatch, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function doLike(postId){
    const alreadyLiked = LikePost.checkAlreadyLiked(postId, state);
    console.log(alreadyLiked);
    if (alreadyLiked == null || !alreadyLiked){
      LikePost.likePost(state, dispatch, postId);
    }else{
      LikePost.unlikePost(state, dispatch, postId);
    }
  }

  function doReply(postId){
    openCommentBox(state, dispatch, postId);
  }

  function closeCommentBox(){
    dispatch({type:'SHOW_COMMENT_BOX', payload:{
      content:'',
      handle:'',
      username:'',
      show:false
    }});
  }

  const postsArray = state.posts;
  return (
    <div className="container">
      <div className="sidepanel">
        <SidePanel />
      </div>
      <div className="posts">
        <label id="titleBanner">Home</label>
        <YourGweet />
        <Posts postsArray={postsArray} onLikeBtnPressed={doLike}
            onReplyBtnPressed={doReply}/>
      </div>
      <div className="searchpanel">
        <SearchBar />
      </div>
      <CommentBox show={state.commentbox.show}
                  content={state.commentbox.content}
                  username={state.commentbox.username}
                  handle={state.commentbox.handle}
                  onClose={closeCommentBox}/>
    </div>
  );
}

export default NewsFeedComponent;
