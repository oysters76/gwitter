
function getAllPosts(token, callback){
  const authHeader = "Bearer " + token;
  fetch('https://gwitter-backend.herokuapp.com/posts',
  {
    method:'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authHeader
    }
  }).then(res=>{
    res.json().then(posts=>{
      callback(posts);
    })
  });
}

function addPost(token,content, callback){
  if (content === ""){
    callback("Gweet cannot be empty!", null);
    return;
  }else if (content.length >= 200){
    callback("Gweet content cannot be greater than 200 characters", null);
    return;
  }
  const authHeader = "Bearer " + token;
  fetch('https://gwitter-backend.herokuapp.com/posts',
  {
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authHeader
    },
    body:JSON.stringify({
      content: content
    })
  }).then(res=>{
    res.json().then(result=>{
      callback(null, result);
    })
  });
}

function likePost(token,postId,isLike, callback){
  const authHeader = "Bearer " + token;
  fetch('https://gwitter-backend.herokuapp.com/like',
  {
    method:'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': authHeader
    },
    body:JSON.stringify({
      postid: postId,
      like:isLike
    })
  }).then(res=>{
    res.json().then(result=>{
      callback(null, result);
    })
  });
}

const postHandler = {
  getAllPosts: getAllPosts,
  addPost:addPost,
  likePost:likePost
};

export default postHandler;
