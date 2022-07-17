import React from 'react'
import { NavLink } from 'react-router-dom'
import List from '../List'

import "./styles.sass"

const links = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/work", name: "Work" },
    { to: "/contact", name: "Contact" },
]

export default ({ toggleHandler }) => (
    <div className="nav-links">
        <List items={links} itemHandler={({ name, to }, index) => <NavLink key={index} to={to} onClick={toggleHandler}>{name}</NavLink>} />
    </div>
)