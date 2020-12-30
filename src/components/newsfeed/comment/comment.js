import './comment.css';

function CommentBox(props){

  let displayType = "none";
  if (props.show){
    displayType = "block";
  }

  function close(){
    props.onClose();
  }

  return (
      <div class="comment-box-container" style={{display:displayType}}>
        <div class="comment-box">
          <div class="header-pane">
            <span class="material-icons" style={{color:"#41B3A3", cursor:"pointer"}} onClick={close}>
              close
            </span>
          </div>
          <div class="gweet-pane">
            <div class="gweet-img">
              <img id="replyimg" src="https://pbs.twimg.com/profile_images/1301706251722780672/XyhXOFeO_400x400.jpg" alt="profile"/>
            </div>
            <div class="gweet-content">
              <div class="gweet-header">
                <label id="gweetUsername">{props.username}</label>
                <label id="gweetHandle">@{props.handle}</label>
              </div>
              <label>{props.content}</label>
            </div>
          </div>
          <div class="user-pane">
            <img id="userimg" src="https://pbs.twimg.com/profile_images/1301706251722780672/XyhXOFeO_400x400.jpg" alt="profile"/>
            <input type="text" placeholder="Gweet your reply" />
          </div>
          <div class="footer-pane">
            <button>Reply</button>
          </div>
        </div>
      </div>
  );
}

export default CommentBox;
