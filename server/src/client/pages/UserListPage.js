import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                Here's a big list of users:
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
export { loadData }

export default connect(mapStateToProps,{ fetchUsers })(UserList)