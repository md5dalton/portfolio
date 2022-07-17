import React, { Fragment, Component } from 'react'
import SideDrawer from './SideDrawer'
import Header from "./Header"

export default class Layout extends Component
{
      
    state = {
        sideDrawerIsOpen: false
    }
    
    toggleSideDrawer = () => {
        this.setState(prevState => ({
            sideDrawerIsOpen: !prevState.sideDrawerIsOpen
        }))
    }

    render () {
        return (
            <Fragment>
                <Header 
                    sideDrawerIsOpen={this.state.sideDrawerIsOpen} 
                    sideDrawerToggleHandler={this.toggleSideDrawer}
                />
                <SideDrawer
                    isOpen={this.state.sideDrawerIsOpen}
                    toggleHandler={this.toggleSideDrawer}
                />
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        )
    }
}