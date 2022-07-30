import React from 'react'
import Discord from '../../assets/images/social/discord.png'
import Facebook from '../../assets/images/social/facebook.png'
import Isntagram from '../../assets/images/social/isntagram.png'
import Linkedin from '../../assets/images/social/linkedin.png'
import Medium from '../../assets/images/social/medium.png'
import Reddit from '../../assets/images/social/reddit.png'
import Telegram from '../../assets/images/social/telegram.png'
import Tiktok from '../../assets/images/social/tiktok.png'
import Twitter from '../../assets/images/social/twitter.png'
import Youtube from '../../assets/images/social/youtube.png'



const SocialIconSet = () => {
    return (
        <>
            <a href="https://discord.com/invite/rBhxDscqnZ" target="_blank"><img src={Discord} alt="Discord" /></a>
            <a href="https://www.facebook.com/metapizzabucks" target="_blank"><img src={Facebook} alt="Facebook" /></a>
            <a href="https://www.instagram.com/pizzabucksofficial/" target="_blank"><img src={Isntagram} alt="Isntagram" /></a>
            <a href="https://www.linkedin.com/company/pizzabucks/" target="_blank"><img src={Linkedin} alt="Linkedin" /></a>
            <a href="https://medium.com/@PIZZABUCKS" target="_blank"><img src={Medium} alt="Medium" /></a>
            <a href="https://www.reddit.com/r/PizzaBucksOfficial/" target="_blank"><img src={Reddit} alt="Reddit" /></a>
            <a href="https://t.me/pizzabucks" target="_blank"><img src={Telegram} alt="Telegram" /></a>
            <a href="https://www.tiktok.com/@pizzabucksofficial?" target="_blank"><img src={Tiktok} alt="Tiktok" /></a>
            <a href="https://twitter.com/pizza_bucks" target="_blank"><img src={Twitter} alt="Twitter" /></a>
            <a href="https://www.youtube.com/channel/UCzMCUnEpRVTRGBiUGO8marw/featured" target="_blank"><img src={Youtube} alt="Youtube" /></a>
        </>
    )
};

export default SocialIconSet;
