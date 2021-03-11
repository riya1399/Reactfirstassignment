import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom'
import Listitems from './Listitems';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentitem:{
        name:'',
        key:''
      }
    }
    this.handleinput=this.handleinput.bind(this);
    this.additem=this.additem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }
  handleinput(e){
    this.setState(
      {
        currentitem:{
          text:e.target.value,
          key:Date.now()
        }
      })
  }
  additem(e){
    e.preventDefault();
    
    const newitem=this.state.currentitem;
    console.log(newitem);
    var fname=newitem.text.split("-");
      console.log(fname);

    if (fname[0]!==""){
      const newitems=[...this.state.items];
      console.log(newitems)
      newitems.push({ name:fname[0],quantity:fname[1]})
      this.setState({
        items:newitems,
        currentitem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filtered=this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        items:filtered
      })

  }

render() {
    return (
      <div className="App">
        <h1>React First Assignment</h1>
        <form id="form" onSubmit={this.additem}>
        <input type="text" value={this.state.currentitem.text}
        onChange={this.handleinput}/>
        <button type="submit">submit</button>
        <Listitems items={this.state.items} deleteItem={this.deleteItem}></Listitems>
        
        </form>
      </div>
    );
};
};


export default App;
