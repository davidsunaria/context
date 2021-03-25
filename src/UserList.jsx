import React from "react"
import SingleData from "./SingleData"





export default class UserList extends React.Component{

    render(){
        return(
                 <>
                    {this.props.userData.map((singleUser)=>{
                        return <SingleData select={"name"} data={singleUser} 
                        handler={this.props.handler}
                        key={singleUser.id} border="2px solid red"/>
                    })}
                 </>
        )
    }
}