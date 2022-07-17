import React from 'react'
import Icon from '../../../UI/Icon'

export default ({ icon, text }) => {

    return (
        <div className="step-item">
            <Icon name={icon} />
            <div className="text">{text}</div>
        </div>
    )
}