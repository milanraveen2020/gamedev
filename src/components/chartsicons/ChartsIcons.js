import React from 'react'
import Bsccan from '../../assets/images/charts/bsccan.png'
import Coingecko from '../../assets/images/charts/coingecko.png'
import Coinmarketcap from '../../assets/images/charts/coinmarketcap.png'
import Dexguru from '../../assets/images/charts/dexguru.png'
import Livecoinwatch from '../../assets/images/charts/livecoinwatch.png'
import Nomics from '../../assets/images/charts/nomics.png'
import Poocoin from '../../assets/images/charts/poocoin.png'



const ChartsIcons = () => {
    return (
        <>
            <div className="main-chart-container">
                <div className="charts-icons">
                    <a href="https://bscscan.com/token/0x241b8e70e25495bb347b3e267ad2e27dcc3b2506" target="_blank"><img src={Bsccan} alt="" /></a>
                    <a href="https://www.coingecko.com/en/coins/metapizzabucks" target="_blank"><img src={Coingecko} alt="" /></a>
                    <a href="https://coinmarketcap.com/currencies/metapizzabucks" target="_blank"><img src={Coinmarketcap} alt="" /></a>
                    <a href="https://dex.guru/token/0x241b8e70e25495bb347b3e267ad2e27dcc3b2506-bsc" target="_blank"><img src={Dexguru} alt="" /></a>
                    <a href="https://www.livecoinwatch.com/price/METAPIZZABUCKS- ___PIZZAB" target="_blank"><img src={Livecoinwatch} alt="" /></a>
                    <a href="https://nomics.com/assets/pizzab4-metapizzabucks" target="_blank"><img src={Nomics} alt="" /></a>
                    <a href="https://poocoin.app/tokens/0x241b8e70e25495bb347b3e267ad2e27dcc3b2506" target="_blank"><img src={Poocoin} alt="" /></a>
                </div>
            </div>
        </>
    )
};

export default ChartsIcons;
