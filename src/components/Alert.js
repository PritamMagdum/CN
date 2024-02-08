import React from 'react'

function Alert(props) {
    return (
        <div>
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong>{props.message}</strong>
            </div>
        </div>
    )
}

export default Alert