import React from 'react'
import NameText from "./NameText";
import Emoji from "./Emoji";
import JinguLogo from "./JinguLogo";
import Media from "react-media";

function App(){
    const mstyles = {
        div: {
            paddingTop: '121px',
            fontSize: '1.2rem'
        }
    }
    const  styles = {
        div: {

        }
    }
    return(
        <Media query={{ maxWidth: 450 }}>
            {matches =>
                matches ? (
                    <div style={mstyles.div}>
                        <JinguLogo/>
                        <NameText/>
                        <Emoji/>
                    </div>
                ) : (
                    <div style={styles.div}>
                        <NameText/>
                        <JinguLogo/>
                        <Emoji/>
                    </div>
                )
            }
        </Media>
        )
}

export default App