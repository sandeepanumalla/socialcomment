

import { Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import React from 'react'


const HeaderRight = () => {
    return (
        <div>
            <div className="dashboard_title_right">
                <div className="add_btn">
                <Button variant="contained" color="primary">
                     + Add
                </Button>
                <Search></Search> 
                </div> 
                    <div className="right_settings">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default HeaderRight
