import './loader.css';

function Loader(props){
  let display = 'none';
  if (props.show){
    display = 'flex';
  }

  return (
    <div className="loader" style={{display:display}}>
        <div className="loader-content">
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    </div>
  );

}

export default Loader;
