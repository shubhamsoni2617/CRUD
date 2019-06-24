import React from 'react';
import {Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth'

const Header=()=>{

    return (
        <div className="ui secondry pointing menu">
                <Link to="/" className="item">Left Stream</Link>
            <div className="right menu">
                <Link to="/" className="item">Right Stream</Link>
            </div>
                <GoogleAuth />
        </div>
    )
}

export default Header;