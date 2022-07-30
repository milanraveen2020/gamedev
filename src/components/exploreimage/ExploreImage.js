import React from 'react'
import NftSample from '../../assets/images/hot-auction.jpeg'
import AvatarImage from '../avatarimage/AvatarImage'

const ExploreImage = () => {
    return (
        <>
            <div className="auction-image exd-image">
                <img src={NftSample} alt="" className="img-responsive" />
                <div className="details-container">
                    <div className="name-details">
                        <h2>Goat gangster</h2>
                        <h3>Highest Bid: 0.1 BNB</h3>
                    </div>
                    <div className="artist-details">
                        <div className="auctionartist">
                            <AvatarImage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreImage
