import React from 'react'
import Media from "react-media";

function NameText(){
    return(
        <Media query={{ maxWidth: 450 }}>
            {matches =>
                matches ? (
                    <h1 style = {{textAlign: "center"}}>Petrov Dmitriy</h1>
                ) : (
                    <h1 style={{color: "red"}}>Petrov Dmitriy</h1>
                )
            }
        </Media>
    )
}

export default NameText