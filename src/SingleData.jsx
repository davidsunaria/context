import React from "react"
import Name from "./Name"
import { UserContext } from "./contextApi"

export default class SingleData extends React.Component{

     getData=(contextData)=>{

         //console.log(this.props.data)
         if(this.props.data !==undefined){
            contextData.handler(this.props.data)
         }
     }
    

    

    
    render(){

        
        let data=null

        return(
            <UserContext.Consumer>
                
                {
                    (contextData)=>{
                        if(this.props.select!==undefined && this.props.data[this.props.select]){
                            data=<div style={{border:this.props.border}} className="leftData">
                               <Name singleName={this.props.data[this.props.select]}/>
                            </div>
                           }
                         else{
                            data=<div>
                            <h1>UserDetail is Below:</h1>
                            <h1>Name: {contextData.selectedData.name}</h1>
                            <h2>City: {contextData.selectedData.address.city}</h2>
                            <h2>Phone: {contextData.selectedData.phone}</h2>
                        </div>
                         }
                         return(
                             <div onClick={()=>{this.getData(contextData)}} className="detail">
                             {data}
                             </div>
                         )  
                    }          
                }
                
       </UserContext.Consumer>
            
            
        )
    }





}