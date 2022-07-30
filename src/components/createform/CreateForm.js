import React from 'react'

const CreateForm = () => {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div class="form-group">
                            <label for="fileupload">Upload File</label>
                            <input type="file" class="form-control-file" id="fileupload" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="form-group">
                            <label for="itemname">Item Name</label>
                            <input class="form-control" type="text" id='itemname' />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" id="description" rows="3"></textarea>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="itemprice">Item Price</label>
                            <input class="form-control" type="text" id='itemprice' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="royality">Royality</label>
                            <input class="form-control" type="text" id='royality' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="itemsize">Size</label>
                            <input class="form-control" type="text" id='itemsize' />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="form-group">
                            <label for="noofcopies">No of Copies</label>
                            <input class="form-control" type="text" id='noofcopies' />
                        </div>
                    </div>
                    <div className="col-md-12 create-radio-buttons">
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
                    </div>
                    <div className="col-md-12">
                        <button type="submit" class="btn btn-default">Create Item</button>
                    </div>
                </div>




            </form>
        </>
    )
}

export default CreateForm
