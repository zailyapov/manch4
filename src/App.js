import React from "react";

function Welcome(props){
  return <h1> Привет, {props.name}</h1>
}

function App(){
  return(
    <div>
      <Welcome name = 'Sara'/>
      <Welcome name = ' Argen'/> 
      <Welcome name = 'Bayel'/>
    </div>
  )
} 

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

export default App;
