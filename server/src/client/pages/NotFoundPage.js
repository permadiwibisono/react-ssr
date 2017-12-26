import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.statusCode = 404;
    return (
        <div className="center-align" style={{marginTop:200}}>
            <h3>Not Found</h3>
            <p>Ooops, route not found.</p>
        </div>
    )
}

export default {
    component: NotFoundPage
}