import React,{Component} from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';



class App extends Component{
  constructor(){
      super();
      this.state={
  robots:[],
  searchfield:''
}
    }
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>{return response.json();})
  .then(users=>{this.setState({robots:users})
  });

}
    onSearchChange=(event)=>{
this.setState({searchfield:event.target.value})


    }
  render() {
    const {robots,searchfield}=this.state;
const filteredRobots=robots.filter(robot=>{
  return robot.name.toLowerCase().includes(searchfield.toLowerCase());//only include the robot which is in search field
});
return !robots.length?  
<h1>Loading</h1>:

  
 <div className="App">
  <h1 className="f2">RoboFriends</h1>
  <SearchBox searchChange={this.onSearchChange} />
  <Scroll>
  <ErrorBoundary>
   <CardList robots={filteredRobots}/>
   </ErrorBoundary>
   </Scroll>
    </div>
  
}
}

export default App;
