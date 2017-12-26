import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsers } from '../actions';

class UserList extends Component{
    componentDidMount(){
        this.props.fetchUsers();
    }

    renderUserList(){
        return this.props.users.map(user=><li key={user.id}>{user.name}</li>)
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>User List Page</title>
                    <meta property="og:title" content="User List Page"/>
                </Helmet>
                <h3>Here's a big list of users:</h3>
                <ul>{this.renderUserList()}</ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {users:state.users}
}

function loadData(store){
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component:connect(mapStateToProps,{ fetchUsers })(UserList)
}