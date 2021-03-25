import React from "react"
import axios from "axios"
import UserList from "./UserList"
import "./index.css"
import SingleData from "./SingleData"

export default class App extends React.Component{

  state={
         user:[],
         user2:{
           name:"david",
           address:{}
         }

  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
      
       this.state.user=res.data
       this.setState(this.state)
 
    })

  }

  getData(dynamic){
        this.state.user2=dynamic
        this.setState(this.state)

  }

 

  render(){
    return(
      <>
      <div className="left">
        <UserList userData={this.state.user} handler={this.getData.bind(this)} />
      </div>
      <div className="right">
        <SingleData selectedData={this.state.user2} />
      </div>

      </>
    )
  }
}