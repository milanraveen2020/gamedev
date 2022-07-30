import React from 'react'

import NavBar from '../components/navbar/NavBar'
import FilterButton from '../components/filterbutton/FilterButton'
import ExploreImage from '../components/exploreimage/ExploreImage'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import ProfileHeader from '../components/profileheader/ProfileHeader'
import Footer from '../components/footer/Footer'


const Profile = () => {
    return (
        <>
            <NavBar />
            <Breadcrumb name="Profile" />
            <ProfileHeader />
            <div className="exclusive-drops">
                <div className="container">
                    <div className="exclusive-drops-list">
                        <div className="filter-set">
                            <FilterButton name="All" />
                            <FilterButton name="Filter-i" />
                            <FilterButton name="Filter-ii" />
                            <FilterButton name="Filter-iii" />
                            <FilterButton name="Filter-iv" />
                        </div>
                        <div className="main-explore-image-container">
                            <div className="row">
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                                <div className="col-md-3">
                                    <ExploreImage />
                                </div>
                            </div>
                            {/* <div className="loadmore-button">
                                <button>Load More <i class="fas fa-arrow-right"></i></button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}

export default Profile
