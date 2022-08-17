import React from 'react'
import Button from '../../../UI/Button'

export default ({ image, name, preview, code }) => {

    return (
        <div className="project-item">
            <div className="poster">
                <img alt='' src={image} />
                <div className="links">
                    {preview && <a href={preview} target="_blank"><Button>Preview App</Button></a>}
                    {code && <a href={code} target="_blank"><Button className="terciary">View Code</Button></a>}
                </div>
            </div>
            <div className="name">{name}</div>
        </div>
    )
}