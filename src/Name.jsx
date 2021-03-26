import React from "react"

export default class Name extends React.Component{



    render(){
        return(
            <>
             <h2>Name: {this.props.singleName}</h2>
            </>
        )
    }

}