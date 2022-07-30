import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Footer from '../components/footer/Footer'

import MainImage from '../components/mainimage/MainImage'
import ArtistAvatar from '../components/artistavatar/ArtistAvatar'
import Bidder from '../components/bidder/Bidder'
import Owner from '../components/owner/Owner'
import History from '../components/history/History'
import BidInfo from '../components/bidinfo/BidInfo'

const ItemDetails = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb name="Item Details" />
            <div className="starparalax create">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="title">
                    <div className="container">
                        <div className="row details-row">
                            <div className="col-md-6">
                                <div className="items-main-cont">
                                    <h2>Test Name</h2>
                                    <h3>Highest Bid: <span>0.073 BNB</span></h3>
                                    <div className="item-description">
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </p>
                                    </div>
                                    <div className="bidbutton">
                                        <button className='buy-it-button'>Buy It</button>
                                        <button className='place-a-bid-button'>Place a Bid</button>
                                    </div>
                                    <div className="item-sub-description">
                                        <ul class="nav nav-tabs">
                                            <li class="active"><a data-toggle="tab" href="#home">BID</a></li>
                                            <li><a data-toggle="tab" href="#menu1">OWNER</a></li>
                                            <li><a data-toggle="tab" href="#menu2">HISTORY</a></li>
                                            <li><a data-toggle="tab" href="#menu3">INFO</a></li>
                                        </ul>

                                        <div class="tab-content">
                                            <div id="home" class="tab-pane fade in active">
                                                <div className="bidders-div">
                                                    <Bidder />
                                                    <Bidder />
                                                    <Bidder />
                                                    <Bidder />
                                                </div>
                                            </div>
                                            <div id="menu1" class="tab-pane fade">
                                                <div className="bidders-div">
                                                    <Owner />
                                                </div>
                                            </div>
                                            <div id="menu2" class="tab-pane fade">
                                                <div className="bidders-div">
                                                    <History />
                                                </div>
                                            </div>
                                            <div id="menu3" class="tab-pane fade">
                                                <div className="bidders-div">
                                                    <BidInfo id="NFT ID" name="224733" />
                                                    <BidInfo id="MINT TRANSACTION" name="0x8b4d9ce5c3a0dcc9955cd9f951670ed08a78d4cc625aab51dd9d170c0ee25b8a" />
                                                    <BidInfo id="CONTRACT ADDRESS" name="0xF5db804101d8600c26598A1Ba465166c33CdAA4b" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="main-item-right-container">
                                    <MainImage />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ItemDetails
