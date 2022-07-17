import React from 'react'
import Logo from '../../UI/Logo'
import NavLinks from '../../UI/NavLinks'
import SideDrawerToggler from '../../UI/SideDrawerToggler'

import './styles.sass'

export default ({ sideDrawerIsOpen, sideDrawerToggleHandler }) => (
    <header>
        <div>
            <div className="flex-wrapper">
                <Logo />
                <NavLinks />
                <SideDrawerToggler 
                    toggleHandler={sideDrawerToggleHandler} 
                    isOpen={sideDrawerIsOpen}
                />
            </div>
        </div>
    </header>
)