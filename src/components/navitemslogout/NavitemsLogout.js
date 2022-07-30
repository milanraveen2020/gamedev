import React from 'react'
import UserIcon from '../../assets/images/user.png'
import SignInimage from '../../assets/images/sign-in.png'



const NavitemsLogout = () => {
    return (
        <ul className='logout-nav-items'>
            <li>
                <a href="#"><img src={SignInimage} alt="" /></a>
            </li>
        </ul>
    )
}

export default NavitemsLogout
