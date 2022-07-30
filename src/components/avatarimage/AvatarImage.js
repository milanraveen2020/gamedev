import React from 'react'
import AvatarImages from '../../assets/images/artist-avatar.jpg'

const AvatarImage = () => {
    return (
        <>
            <div className="avatarimage">
                <img src={AvatarImages} alt="" />
            </div>
        </>
    )
}

export default AvatarImage
