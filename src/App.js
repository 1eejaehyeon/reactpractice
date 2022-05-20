import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    hiyo : "0"

  }
  


  onClick = () => {
    //this.setState{{ value : this.state.value +1}} ;
    this.setState(({value: z}) => ({
        vlaue: z + 1 
    }))
  
  }
  onChange = (e) => {
    const {name, value} = e.target;
    console.log("changed value:", value, name)
    this.setState({
      [name]: value,
    })
    console.log("changed value:", value, name)
  };
  render() {
    const { hiyo } = this.state 
    /*const {hiyo} = this.state 객체 구조 분해 문법 사용한듯  
    const { info } = this.state 는 단순히 `this.state.info` 라는 값을 `info`로 접근할 수 있게끔 해주는 문법입니다.
     예를 들어, react의 this.props에 담겨있는 값에 대해서 
     매번 this.props.xxx, this.props.yyy, this.props.zzz 으로 접근하는 것이 번거롭기 때문에, 
     const { xxx, yyy, zzz } = this.props의 형태로 사용할 수 있는 것이구요. 
     따라서 this.state.info 와 info는 같을 수 밖에 없습니다. 
    — 이것에 대해 자세한 것은 object destructuring를 참조해보세요.
    
    */
    return (
      <div>
        {hiyo}
        <hr/>
        {this.state.hiyo}
        <hr/>
        <input name="hiyo" onChange={this.onChange}/>
        <hr/>
        {JSON.stringify(this.state)}
      </div>
    ); 
  };
};

export default App;
