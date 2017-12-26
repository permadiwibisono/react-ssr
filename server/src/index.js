import 'babel-polyfill';
import express from 'express';
import proxy from 'express-http-proxy';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();
app.use('/api',proxy('http://react-ssr-api.herokuapp.com',{
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host']='localhost:3000';
        return opts;
    }
}));

app.use(express.static('public'));

app.get('*',(req,res)=>{
    const store = createStore(req);
    const promises = matchRoutes(Routes,req.path).map(({route})=>{
        return route.loadData?route.loadData(store):null;
    })
    .filter(promise => promise)
    .map(promise => new Promise((resolve,reject)=>{
            promise.then(resolve).catch(resolve);
        })
    );
    const render = () => { 
        const context = {};
        const html = renderer(req,store,context);
        res.status(context.statusCode || 200).send(html);
    }
    Promise.all(promises).then(render);
})

app.listen(3000, ()=>{
    console.log('Listening port 3000');
})