import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Footer from '../components/footer/Footer'
import ProfileForm from '../components/profileform/ProfileForm'

const Editprofile = () => {

    return (
        <>
            <NavBar />
            <Breadcrumb name="Edit Profile" />
            <div className="starparalax create">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-3 col-md-6">
                                <div className="create-form-container">
                                    <ProfileForm />
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

export default Editprofile
