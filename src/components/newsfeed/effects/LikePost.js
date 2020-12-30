import PostsHandler from '../../../handlers/PostsHandler';
import fetchAllPosts from './FetchPosts';

const checkAlreadyLiked = (postid, state) => {
  let post = state.posts.filter((post)=>{
    return (post.id === postid);
  });
  if (post != null){
    return post[0].isLiked;
  }else{
    return null;
  }
}

const likePost = (state, dispatch, postId) => {
  PostsHandler.likePost(state.user.token, postId, true, (err,res)=>{
    fetchAllPosts(state,dispatch,true);
  })
}

const unlikePost = (state, dispatch, postId) => {
  PostsHandler.likePost(state.user.token, postId, false, (err,res)=>{
    fetchAllPosts(state,dispatch,true);
  })
}

const likePosts = {
  checkAlreadyLiked:checkAlreadyLiked,
  likePost:likePost,
  unlikePost:unlikePost
}
export default likePosts;
