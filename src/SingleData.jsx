import React from "react"
import Name from "./Name"
import { UserContext } from "./contextApi"
 
export default class SingleData extends React.Component{
    
    static contextType = UserContext;

     getData=(context)=>{

         //console.log(this.props.data)
         if(this.props.data !==undefined){
            context.handler(this.props.data)
         }
     }
    
    
    render(){

        
        let data=null

        if(this.props.select!==undefined && this.props.data[this.props.select]){
            data=<div style={{border:this.props.border}} className="leftData">
               <Name singleName={this.props.data[this.props.select]}/>
            </div>
           }
         else{
            data=<div>
            <h1>UserDetail is Below:</h1>
            <h1>Name: {this.context.selectedData.name}</h1>
            <h2>City: {this.context.selectedData.address.city}</h2>
            <h2>Phone: {this.context.selectedData.phone}</h2>
        </div>
         }

        return(
            <div onClick={this.getData.bind(this,this.context)} className="detail"> 
            {/* this.context is second parameter but act as first */}
            {data}
            </div>
       
        )
    }

}