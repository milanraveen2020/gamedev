import React from 'react'
import Logo from '../../assets/images/logo.png'

import ChartsIcons from '../chartsicons/ChartsIcons'



const Footer = () => {
    return (
        <div>
            <div className="container">
                <div className="charts-container">
                    <h2>Charts</h2>
                    <ChartsIcons />
                </div>
            </div>
            <div className="copyrights">
                <div className="container">
                    <p>
                        The information on this website should not be interpreted as providing legal or financial advice. There are always risks associated with smart contracts. PizzaBucks Token is not a registered broker, analyst or investment advisor. If you are willing to, or have purchased PizzaBucks tokens, you agree that you're not purchasing a security or making an investment. PizzaBucks cannot be held liable for any losses, fees, or taxes that you may incur. Do your own research and consult with your financial advisor before making any investment choices.
                    </p>
                    <span>© PizzaBucks {(new Date().getFullYear())} All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
