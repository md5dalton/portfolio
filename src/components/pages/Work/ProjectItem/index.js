import React from 'react'
import Button from '../../../UI/Button'

export default ({ image, name, preview, code }) => {

    return (
        <div className="project-item">
            <div className="poster">
                <img alt='' src={image} />
                <div className="links">
                    {preview ? <Button role="secondary"><a href={preview} target="_blank">Preview App</a></Button> : null}
                    {code ? <Button role="terciary"><a href={code} target="_blank">View Code</a></Button> : null}
                </div>
            </div>
            <div className="name">{name}</div>
        </div>
    )
}