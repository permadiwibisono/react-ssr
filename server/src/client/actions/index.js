export const FETCH_USERS = 'FETCH_USERS';

//This params from redux thunk middleware, the third params its axios instance that we passed before.
export const fetchUsers = ()=> async (dispatch, getState, api) =>{
    const responses = await api.get('/users');
    
    dispatch({
        type:FETCH_USERS,
        payload:responses
    })
}

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const fetchCurrentUser = ()=> async (dispatch, getState, api) =>{
    const responses = await api.get('/current_user');
    
    dispatch({
        type:FETCH_CURRENT_USER,
        payload:responses
    })
}