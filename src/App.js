import './App.css';
import UserForm from "./components/UserForm";
import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    // console.log(user);
    if(user) {
    axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      console.log(res);
    })
   } else return
  }

  render() {
      return (
        <div>
            <p>
            axios
            </p>
            <UserForm getUser={this.getUser}/>
        </div>    
      )
}
}
export default App;
