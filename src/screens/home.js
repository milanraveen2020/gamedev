import React, { useEffect, useState } from 'react'

import BnbImage from '../assets/images/bnb-coin-02.png'

const Home = () => {

    const [alertmessage, setAlertmessage] = useState("");

    const copydata = () => {
        navigator.clipboard.writeText('0x241b8e70e25495bb347b3e267ad2e27dcc3b2506')
    }

    const allertdata = () => {
        setAlertmessage("Copied")
        setTimeout(() => {
            setAlertmessage("")
        }, 700)
    }

    return (
        <>
            <div className="landing-page-main">
                {/* <NavBar /> */}
                <div className="main-hero text">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="bnb-image">
                                    <img src={BnbImage} alt="" className='img-responsive ball' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h1>Website under maintenance</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Footer />
                <ScrollTop /> */}
            </div>

        </>
    )
}

export default Home
