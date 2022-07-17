import React from 'react'
import { SecondaryButton, TerciaryButton } from '../../../UI/Button'

export default ({ image, name, preview, code }) => {

    return (
        <div className="project-item">
            <div className="poster">
                <img alt='' src={image} />
                <div className="links">
                    {preview ? <SecondaryButton><a href={preview} target="_blank">Preview App</a></SecondaryButton> : null}
                    {code ? <TerciaryButton><a href={code} target="_blank">View Code</a></TerciaryButton> : null}
                </div>
            </div>
            <div className="name">{name}</div>
        </div>
    )
}