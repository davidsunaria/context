import React from "react"

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
         <h2>{this.props.data.name}</h2>
         </div>
        }
        else{
         
            data=<div>
                <h1>UserDetail is Below:</h1>
                <h1>Name: {this.props.selectedData.name}</h1>
                <h2>City: {this.props.selectedData.address.city}</h2>
                <h2>Phone: {this.props.selectedData.phone}</h2>
            </div>

        }
        

        return(
            <div onClick={this.getData.bind(this)}>
            {data}
            </div>
        )
    }





}