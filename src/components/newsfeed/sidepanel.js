function SidePanel(){
  return (
    <>
      <i className="material-icons md-24" id="logo">brightness_4</i>
      <ul id="newsfeed-sidenav">
          <li className="selected"><i className="material-icons menuicon" style={{fontSize: "1.8vw"}}>home</i> Home</li>
          <li><i className="material-icons menuicon" style={{fontSize: "1.8vw"}}>face</i> Profile</li>
      </ul>
    </>
  );
}

export default SidePanel;
