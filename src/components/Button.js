import React from 'react'

export default function Button(props) {
    return (
        <button className="btn bg-yellow fw-bold">
            {props.children}
        </button>
    )
}
