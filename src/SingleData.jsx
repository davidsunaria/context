import React from "react"
import { UserContext } from "./contextApi"

export default class SingleData extends React.Component{

     getData(){

         //console.log(this.props.data)
         if(this.props.data !==undefined){
            this.props.handler(this.props.data)
         }
     }
    

    

    
    render(){

        
        let data=null
        if(this.props.select!==undefined){
         data=<div style={{border:this.props.border}} className="leftData">
         <h2>{this.props.data[this.props.select]}</h2>
         </div>
        }
        else{
           <UserContext.Consumer>
             {
                 (contextData)=>{
                     return (
                        data=<div>
                        <h1>UserDetail is Below:</h1>
                        <h1>Name: {contextData.selectedData.name}</h1>
                        <h2>City: {contextData.selectedData.address.city}</h2>
                        <h2>Phone: {contextData.selectedData.phone}</h2>
                    </div>
                     )
                 }
             }

           </UserContext.Consumer>
           

        }
        

        return(
           
             <UserContext.Consumer>{(contextData)=>{
                  return(
                    <div onClick={()=>{
                        contextData.handler(this.props.data)
                    }}>
                    {data}
                    </div>
                  )

             }}</UserContext.Consumer>
         
            
        )
    }





}