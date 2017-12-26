import axios from 'axios';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';

export default (req)=>{
    const axiosServerInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie:req.get('cookie') || '' }
    })
    return createStore(reducers,{},applyMiddleware(thunk.withExtraArgument(axiosServerInstance)))
}