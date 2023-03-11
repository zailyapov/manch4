import {useState} from "react";

function App() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

  return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-around'}}>
          <div>
              <button onClick={handleClick} style={open ? {display: 'block'} : {display: 'none'}} className="blue">Blue</button>
          </div>
          <div>
              <button onClick={handleClick} style={!open ? {display: 'block'} : {display: 'none'}} className="green" >Green</button>
          </div>
      </div>
  );
}

export default App;