import React from "react";
import Counter from "./Components/Counter";


class App extends React.Component {
  constructor(){
    super()
    this.state={
      show: false
     
    }
  }
  
  toggleShow =()=>{
    this.setState({show: !this.state.show})
  }
  render (){
    return (
      <div className="App">
        <h2>this is a ws of state -- class</h2>
        <hr/>
        <button onClick={this.toggleShow}>Show Counter</button>
        {this.state.show && <Counter/>}
      </div>
    )
  }
}

export default App;
