import OtherProfile from '../../assets/profile2.jpg';

function Posts(props){

  function Heart(props){
    let likes = "";
    if (props.amount !== 0){
      likes = props.amount;
    }
    if (props.isLike){
      return <li className="stat" onClick={()=>{doLike(props.postId)}}><i className="material-icons">favorite</i> {likes}</li>;
    }else{
      return <li className="stat" onClick={()=>{doLike(props.postId)}}><i className="material-icons">favorite_border</i> {likes}</li>;
    }
  }

  function doLike(postId){
    props.onLikeBtnPressed(postId);
  }

  function doReply(postId){
    props.onReplyBtnPressed(postId);
  }

  return (
    <>
      {
        props.postsArray.map((post)=>{
          return <div className="post" key={post.id}>
              <img src={OtherProfile} alt="profileimg"/>
              <div className="others">
                <div className="titlePane">
                    <label id="userName">{post.username}</label>
                    <label id="userHandle">@{post.handle}</label>
                </div>
                    <label id="postBody">{post.content}</label>
                    <ul className="statPane">
                      <li className="stat" onClick={()=>{doReply(post.id)}}><i className="material-icons">chat_bubble_outline</i> {post.comments}</li>
                      <Heart isLike={post.isLiked} amount={post.likes} postId={post.id}/>
                    </ul>
                </div>
          </div>
        })
      }
    </>
  )
}

export default Posts;
