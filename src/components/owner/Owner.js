import React from 'react'
import AvatarImage from '../avatarimage/AvatarImage'


const Owner = () => {
    return (
        <>
            <div className="main-bid-container">
                <div className="bid-avatar-image">
                    <AvatarImage />
                </div>
                <div className="bid-description">
                    <h4>Creator</h4>
                    <h5>Test Name</h5>
                </div>
            </div>
        </>
    )
}

export default Owner
