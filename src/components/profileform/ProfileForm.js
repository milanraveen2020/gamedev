import React from 'react'
import UploadImage from '../../assets/images/plus.png'
import $ from 'jquery';

const ProfileForm = () => {

    $(document).ready(function () {
        // Prepare the preview for profile picture
        $("#wizard-picture").change(function () {
            readURL(this);
        });
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    return (
        <>
            <form className='picture-lable'>
                <div className="row">
                    <div className="col-md-12">
                        <div class="form-group">
                            <label for="fileupload">Upload Profile Picture</label>
                            <div class="picture-container">
                                <div class="picture">
                                    <img src={UploadImage} class="picture-src" id="wizardPicturePreview" title="" />
                                    <input type="file" id="wizard-picture" class="" />
                                </div>
                                <h6 class="">Choose Picture</h6>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="form-group">
                            <label for="itemname">Display name</label>
                            <input class="form-control" type="text" id='displayname' />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div class="form-group">
                            <label for="itemname">Custom URL</label>
                            <input class="form-control" type="text" id='displayname' />
                        </div>
                    </div>

                    {/* <div className="col-md-12 create-radio-buttons">
                        <div class="standards-container ">
                            <label class="checkbox-button">
                                <input type="radio" name="saletype" />
                                <span>Put on Sale</span>
                            </label>

                            <label class="checkbox-button">
                                <input type="radio" name="saletype" />
                                <span>Instant Sale Price</span>
                            </label>
                            <label class="checkbox-button">
                                <input type="radio" name="saletype" />
                                <span>Unlock Purchased</span>
                            </label>
                        </div>
                    </div> */}
                    <div className="col-md-12">
                        <button type="submit" class="btn btn-default">Update Profile</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ProfileForm
