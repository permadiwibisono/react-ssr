import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({auth})=>{
    console.log("My Auth status ",auth);
    return (
        <div>
            <Link to="/">React SSR</Link>
        </div>
    )
}
const mapStateToProps = ({auth})=>({
    auth
})
export default connect(mapStateToProps)(Header);