import React from 'react'
import Logo from '../../assets/images/logo.png'
import NavitemLogin from '../navItemlogin/NavitemLogin'
import NavitemsLogout from '../navitemslogout/NavitemsLogout'
import SocialIconSet from '../socialiconset/SocialIconSet'

import About from '../../assets/images/navitems/about.png'
import Contact from '../../assets/images/navitems/contact.png'
import Contract from '../../assets/images/navitems/contract.png'
import Document from '../../assets/images/navitems/document.png'
import Nftmarket from '../../assets/images/navitems/nftmarket.png'
import Roadmap from '../../assets/images/navitems/roadmap.png'
import Shop from '../../assets/images/navitems/shop.png'
import Team from '../../assets/images/navitems/team.png'
import Tokenomic from '../../assets/images/navitems/tokenomic.png'
import Tracker from '../../assets/images/navitems/tracker.png'




const NavBar = () => {
    return (
        <>
            <div className="mobile-nav-top">
                <div className="logo-container">
                    <a href="/"><img src={Logo} alt="Logo" /></a>
                </div>
                <div className="nav-bar-items">
                    <NavitemsLogout />
                </div>
            </div>
            <div className="main-nav-bar">
                <div className="container">
                    <div className="nav-container">
                        <div className="logo-container">
                            <a href="/"><img src={Logo} alt="Logo" /></a>
                        </div>
                        <div className="social-set">
                            <SocialIconSet />
                        </div>
                        <div className="nav-bar-items">
                            <NavitemsLogout />
                        </div>


                        <div className="mobile-nav">
                            <nav class="navbar navbar-inverse">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                    <a class="navbar-brand" href="/"><img src={Logo} alt="Logo" /></a>
                                </div>
                                <div class="collapse navbar-collapse" id="myNavbar">
                                    <ul class="nav navbar-nav">

                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-menu-items">
                <div className="container">
                    <ul>
                        <li><a href="https://contract.pizza-bucks.com/" target="_blank"><img src={Contract} alt="" /></a></li>
                        <li><a href="https://team.pizza-bucks.com" target="_blank"><img src={Team} alt="" /></a></li>
                        <li><a href="https://documents.pizza-bucks.com" target="_blank"><img src={Document} alt="" /></a></li>
                        <li><a href="https://metapizzabucks.studio" target="_blank"><img src={Nftmarket} alt="" /></a></li>
                        <li><a href="https://about.pizza-bucks.com" target="_blank"><img src={About} alt="" /></a></li>
                        <li><a href="https://roadmap.pizza-bucks.com" target="_blank"><img src={Roadmap} alt="" /></a></li>
                        <li><a href="https://contract.pizza-bucks.com" target="_blank"><img src={Tokenomic} alt="" /></a></li>
                        <li><a href="https://tracker.pizza-bucks.com" target="_blank"><img src={Tracker} alt="" /></a></li>
                        <li><a href="https://metapizzabucks.pizza" target="_blank"><img src={Shop} alt="" /></a></li>
                        <li><a href="https://contact.pizza-bucks.com" target="_blank"><img src={Contact} alt="" /></a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
