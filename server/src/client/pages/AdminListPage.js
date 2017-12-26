import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAdmins } from '../actions';

class AdminListPage extends Component{
    componentDidMount(){
        this.props.fetchAdmins()
    }

    renderAdmins(){
        return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>)
    }

    render(){
        return(
            <div>
                <h3>Protected list of admin:</h3>
                <ul>
                    { this.renderAdmins() }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ admins }) => ({
    admins
})

export default {
    component: connect(mapStateToProps,{ fetchAdmins })(AdminListPage),
    loadData: ({ dispatch }) => dispatch(fetchAdmins())
}