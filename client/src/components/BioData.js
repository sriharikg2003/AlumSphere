import React from 'react'

const img = "https://media.licdn.com/dms/image/C4E03AQFvzgVmSOtn-Q/profile-displayphoto-shrink_800_800/0/1645170254004?e=1693440000&v=beta&t=DK097B3DFMagq1g77y1s8ngY25FnzBHPpof_aHToLiE"


function BioData(props) {
    return (
        <div className='bio-data-outer-form'>


            <div class="profile">
                <img src={img} alt="Profile Picture" className='bio-profile-img'/>
            </div>
            <form>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div class="form-group">
                    <label for="age">Age:</label>
                    <input type="text" id="age" name="age" required />
                </div>
                <div class="form-group">
                    <label for="address">Address:</label>
                    <input type="text" id="address" name="address" required />
                </div>
               

                <div class="form-group">
                    <label for="LinkedIn">LinkedIn:</label>
                    <input type="text" id="LinkedIn" name="LinkedIn" required />
                </div>

                <div class="form-group">
                    <label for="FaceBook">FaceBook:</label>
                    <input type="text" id="FaceBook" name="FaceBook" required />
                </div>

                <div class="form-group">
                    <label for="Instagram">Instagram:</label>
                    <input type="text" id="Instagram" name="Instagram" required />
                </div>

                <div class="form-group">
                    <label for="Twitter">Twitter:</label>
                    <input type="text" id="Twitter" name="Twitter" required />
                </div>

              

                <div class="form-group">
                    <input type="submit" value="Update" />
                </div>

            </form>



        </div>
    )
}

export default BioData