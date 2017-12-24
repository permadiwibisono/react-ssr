import React from 'react';

const Home = ()=>{
    return (
        <div>
            <div>
                I'm the BEST HOME Component
            </div>

            <button onClick={()=>console.log('Hi there!')}>Press me!</button>
        </div>
    )
}
export default Home;