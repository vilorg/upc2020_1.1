import React from 'react'
import Media from "react-media";
import Emoji_img from './emoji.png'


function Emoji(){
    return(
        <Media query={{ maxWidth: 450 }}>
            {matches =>
                matches ? (<img src={Emoji_img} alt="Here must be emoji.." className='emoji_img_m'/>
                ) : (
                    <img src={Emoji_img} alt="Here must be emoji.." className='emoji_img'/>
                )
            }
        </Media>
    )
}

export default Emoji