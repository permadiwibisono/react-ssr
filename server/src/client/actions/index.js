import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = ()=> async dispatch =>{
    const responses = await axios.get('https://react-ssr-api.herokuapp.com/users/xss');
    
    dispatch({
        type:FETCH_USERS,
        payload:responses
    })
}