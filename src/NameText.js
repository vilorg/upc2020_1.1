import React from 'react'
import Media from "react-media";

function NameText(){
    const style = {
        h1:{
            fontSize:'3rem'
        }
    }


    return(
        <Media query={{ maxWidth: 540 }}>
            {matches =>
                matches ? (
                    <h1 style = {{textAlign: "center"}}>Petrov Dmitriy</h1>
                ) : (
                    <h1 style={style.h1}>Petrov Dmitriy</h1>
                )
            }
        </Media>
    )
}

export default NameText