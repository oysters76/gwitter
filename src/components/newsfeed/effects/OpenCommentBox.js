function openCommentBox(state, dispatch, postId){

  let post = state.posts.filter((post)=>{
    return (post.id === postId)
  });

  if (post != null){
    const content = post[0].content;
    const handle = post[0].handle;
    const username = post[0].username;

    dispatch({type:'SHOW_COMMENT_BOX', payload:{
      content:content,
      handle:handle,
      username:username,
      show:true
    }});

  }

}

export default openCommentBox;
