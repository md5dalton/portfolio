import React, { Fragment } from "react"
import NavLinks from "../../UI/NavLinks"
import SideDrawerToggler from "../../UI/SideDrawerToggler"
import Socials from "./Socials"

import "./styles.sass"

export default ({ isOpen, toggleHandler }) => isOpen ? (
    <Fragment>
        <div className="side-drawer">
            <div className="brand">
                <div className="toggler">
                    <SideDrawerToggler isOpen={isOpen} toggleHandler={toggleHandler} />
                </div>
            </div>
            <NavLinks toggleHandler={toggleHandler} />
            <Socials />
        </div>
    </Fragment>
) : null