import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import serialize from 'serialize-javascript';

import Routes from '../client/Routes';

export default (req, store, context)=>{   
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <div>{ renderRoutes(Routes) }</div>
            </StaticRouter>
        </Provider>
    );
    const { title, meta } = Helmet.renderStatic();
    return `
        <html>
            <head>
                ${title.toString()}
                ${meta.toString()}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_DATA=${serialize(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}