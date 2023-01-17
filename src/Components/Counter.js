import React from 'react';

class Counter extends React.Component{
    constructor(){
        console.log('Hi Im in a Constructor method');
        super()
        this.state={
            count: 0,
            val:'',
            intervalle : null
        }

    }

    componentDidMount(){
        console.log('Hi Counter Comp is mounted');
        this.setState({intervalle: setInterval(()=> this.setState({count: this.state.count+1}),1000)})
    }

    Increment() {
        this.setState({count : this.state.count + 1})
    }

    Decrement = ()=>{
        if(this.state.count> 0){
            this.setState({count: this.state.count -1})
        }
    }

    Reset = ()=>{
        this.setState({count : 0})
    }

    Increment_with_value = ()=>{
        this.setState({count : this.state.count + Number(this.state.val)})
    }

    componentDidUpdate(){
        console.log('Hi Comp Counter has been updated');
        console.log(this.state.count);
    }
    
    componentWillUnmount(){
        console.log('Hi I am dead!!');
        clearInterval(this.state.intervalle)
    }

    render(){
        const count = this.state.count
        return(
            <div>
              <h3>{count}</h3>
              <button onClick={()=>this.Increment()}>Increment</button>
              <button onClick={this.Decrement}>Decrement</button>
              <button onClick={this.Reset}>Reset</button>
              <input onChange={(e)=> this.setState({val : e.target.value})}/>
              <button onClick={this.Increment_with_value}>Increment by value</button>


            </div>
        )
    }
}

export default Counter