import React from 'react'
import Icon from '../Icon'

export default ({ isOpen, toggleHandler }) => (
    <div className="sidedrawer-toggler" onClick={toggleHandler}>
        <Icon name={`${isOpen ? "close" : "menu"}`} />
    </div>
)