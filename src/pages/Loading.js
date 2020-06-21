import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif'
const Loading = () => {
    return (

        <div className="loading">
            <h4>
                rooms data Loading...
                <img src={loadingGif} alt=""/>
            </h4>
        </div>
    )
}

export default Loading;