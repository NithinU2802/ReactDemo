import React from "react"

const Updated = Original =>{
    class NewComponent extends React.Component{
        render(){
            return <Original name="Nithin"/>
        }
    }
    return NewComponent;
}

export default Updated;