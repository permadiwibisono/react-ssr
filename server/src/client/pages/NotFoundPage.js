import React from 'react';

const NotFoundPage = () => {
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