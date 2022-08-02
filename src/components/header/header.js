import React from 'react'
import styled from 'styled-components'

import Avatar from '../../assets/images/avatar.png'

const MainHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
background-color:#2E2F3A ;
padding:10px;
border-radius:10px;
`
const Logo = styled.div`
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 29px;
color: #FFFFFF;
background: linear-gradient(133.75deg, #393C4B 17.42%, #343844 85.96%);
border-radius: 10px;
padding:20px ;
`

const Header = () => {
    return (
        <>
            <MainHeader>
                <Logo>
                    LOGO
                </Logo>
                <div className="avatar">
                    <img src={Avatar} alt="Avatar" />
                </div>
            </MainHeader>
        </>
    )
}

export default Header