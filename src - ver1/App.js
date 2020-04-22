import React from 'react';

import './App.css';
/* function HolaMundo(props){
  console.log(props)
  return(
    <div id="hola">
      <h3>{props.subtitulo}</h3>
    {props.mitexto}
    </div>
    )
} */
class HolaMundo extends React.Component{
  state={
    show: false
  }
  cambiar= () =>{
    this.setState({show:!this.state.show})
  }
  render() {
    if(this.state.show){ 
      return(
        <div id="Hola">
          <h3>
            {this.props.subtitle}
          </h3>
          {this.props.mytext}
          <button onClick={this.cambiar}>Cambiar show</button>
          
        </div>
      )
    }
  
  else{
return(
  <h1>No hay elementos
  <button onClick={this.cambiar}>Cambiar show</button>
  </h1>
)
  }
}
} 
function App() {
  return (
    
    <div>Esta es mi primer componente <HolaMundo mytext="Hola chato" subtitle="subtitulo uno"/>
    <HolaMundo mytext="Hola marcelo"/>
    </div>
  );
}

export default App;
