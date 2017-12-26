import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();
app.use('/api',proxy('https://react-ssr-api.herokuapp.com',{
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host']='http://localhost:3000';
        return opts;
    }
}));

app.use(express.static('public'));

app.get('*',(req,res)=>{
    const store = createStore(req);

    const promises = matchRoutes(Routes,req.path).map(({route})=>{
        return route.loadData?route.loadData(store):null;
    });

    Promise.all(promises).then(()=>{    
        res.send(renderer(req,store));
    })
})

app.listen(3000, ()=>{
    console.log('Listening port 3000');
})