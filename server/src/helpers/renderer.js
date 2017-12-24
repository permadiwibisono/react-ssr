import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import {Provider} from 'react-redux';

import Routes from '../client/Routes';

export default (req, store)=>{    
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                <div>{ renderRoutes(Routes) }</div>
            </StaticRouter>
        </Provider>
    );
    return `
        <html>
            <head>
                <title>Example Server Side Rendering on React</title>
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_DATA=${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}