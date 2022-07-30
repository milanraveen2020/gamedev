import React, { useState } from 'react'
import AvatarImage from '../avatarimage/AvatarImage'

const ProfileHeader = () => {
    const [alertmessage, setAlertmessage] = useState("");

    const copydata = () => {
        navigator.clipboard.writeText('0x016cf83732f1468150d87dcc5bdf67730b3934d3')
    }

    const allertdata = () => {
        setAlertmessage("Copied")
        setTimeout(() => {
            setAlertmessage("")
        }, 700)
    }
    return (
        <>
            <div className="container">
                <div className="profile-avatar-image-container">
                    <div className="profile-avatar">
                        <div className="profile-image">
                            <AvatarImage />
                        </div>
                        <div className="profile-image-details">
                            <h2>Test Name</h2>
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="contract-container">
                        <h6>0x016cf83732f1468150d87dcc5bdf67730b3934d3</h6>
                        <button onClick={() => { copydata(); allertdata(); }} ><i class="far fa-copy"></i></button><span>{alertmessage}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileHeader
