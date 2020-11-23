import React from 'react'
import NameText from "./NameText";
import Emoji from "./Emoji";
import JinguLogo from "./JinguLogo";
import Media from "react-media";

function App(){
    const mstyles = {
        div: {
            padding: '10%',
            paddingTop: '20%',
            fontSize: '1.2rem'
        }
    }
    const  styles = {
        div: {
            padding: '20%'
        }
    }
    return(
        <Media query={{ maxWidth: 540 }}>
            {matches =>
                matches ? (
                    <div style={mstyles.div}>
                        <JinguLogo/>
                        <NameText/>
                        <Emoji/>
                    </div>
                ) : (
                    <div style={styles.div}>
                        <div className={'parent'}>
                            <NameText/>
                            <JinguLogo/>
                        </div>
                        <Emoji/>
                    </div>
                )
            }
        </Media>
        )
}

export default App