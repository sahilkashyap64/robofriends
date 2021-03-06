import React,{Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';


class App extends Component{
  constructor(){
      super();
      this.state={
  robots:robots,
  searchfield:''
}
    }

    onSearchChange=(event)=>{
this.setState({searchfield:event.target.value})


    }
  render() {
const filteredRobots=this.state.robots.filter(robot=>{
  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());//only include the robot which is in search field
});
  return (
    <div className="App">
  <h1 className="f2">RoboFriends</h1>
  <SearchBox searchChange={this.onSearchChange} />
   <CardList robots={filteredRobots}/>
    </div>
  );
}
}

export default App;
