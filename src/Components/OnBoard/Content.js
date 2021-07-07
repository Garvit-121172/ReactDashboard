import React from 'react'

function Content({head,body}) {
    return (
        <div className="onboard-content">
            <h2 className="onboard-content-head">{head}</h2>
            <p className="onboard-content-body">{body}</p>
        </div>
    )
}

export default Content  
