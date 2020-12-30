
import PostsHandler from '../../../handlers/PostsHandler';
import fetchAllPosts from './FetchPosts';

const addNewPost = function(state, dispatch, content){

  PostsHandler.addPost(state.user.token, content, (err, result)=>{
    if (result != null){
      console.log(result);
      fetchAllPosts(state, dispatch, true);
    }else{
      console.log(err);
    }
  })

}

export default addNewPost;
