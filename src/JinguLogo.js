import React from 'react'
import Media from 'react-media'

function JinguLogo(){
    const mstyles = {
        img: {
            borderRadius:'50%',
            width: '210px',
            high: '210px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '86px'
        }
    }

    const styles = {
        img: {
            borderRadius:'50%',
            width: '210px',
            high: '210px'
        }
    }

    return(
        <Media query={{ maxWidth: 540 }}>
            {matches =>
                matches ? (
                    <img src="https://www.jingu.ru/sirius/jingu-logo-512.png" alt="logo" style={mstyles.img} />
                ) : (
                    <img src="https://www.jingu.ru/sirius/jingu-logo-512.png" alt="logo" style={styles.img} />
                )
            }
        </Media>
    )
}

export default JinguLogo