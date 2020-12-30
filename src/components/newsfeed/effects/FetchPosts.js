
import PostsHandler from '../../../handlers/PostsHandler';

const fetchAllPosts = (state, dispatch, force) => {
  console.log(state.posts_loading);
  if ((!state.posts_loading) || force){
    dispatch({type:'POSTS_LOADING', payload:true});
    PostsHandler.getAllPosts(state.user.token,
            (posts)=>{
             let postsPayload = posts.map((post)=>{
                  let isLiked = false;
                  for (let i = 0; i < post.likes.length; i++){
                    if (post.likes[i].user === state.user.id){
                        isLiked = true;
                        break;
                      }
                    }
                    return {
                      id: post._id,
                      content: post.content,
                      likes: post.likes.length,
                      comments:post.comments.length,
                      username:post.user.username,
                      handle:post.user.handle,
                      likes_array:post.likes,
                      comments_array:post.comments,
                      isLiked:isLiked
                    }
             });
             dispatch({type:'UPDATE_POSTS', payload:postsPayload});
          });
        }
}

export default fetchAllPosts;
