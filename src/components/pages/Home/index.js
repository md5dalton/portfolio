import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../Layout/Page'
import Button from '../../UI/Button'

import "./styles.sass"

export default () => (
    <Page name="home">
        <section className="hero">
            <div className="profile"><img src="/images/svg/avatar-2.svg" alt="profile" /></div>
            <h1>Frontend Web Developer</h1>
            <p>
                I transform your designs into real functional websites that meet user expectations by ensuring they look good, 
                run smoothly and offer easy access.
            </p>
        </section>
        <div className="preposition">
            <section>
                <div className="coder"><img src="/images/svg/code.svg" alt="coder" /></div>
                <h2>Finding a professional who specialises in frontend web development does not have to be this hard</h2>
                <p>
                    You have an innovative design idea for your website but you have no idea how to bring it to life on world wide web. Don't worry,
                    I love building websites with efficient code by using best software development practices to ensure easier mantainance thereafter.
                </p>
                <p>Now, let's fix that, find out how we can work together.</p>
                <Button><Link to="/contact">Contact Me</Link></Button>
            </section>
        </div>
        <section className="benefits">
            <h2>Take a quick look of how I work</h2>
            <p>
                I collaborate with your website and graphic designers to build your website from designs made from various softwares such as Adobe XD,
                Sketch, Figma, Photoshop, etc, fashioning everything from the landing page to site layout and enhancing user experience. I integrate data
                from various back-end services whether it's through a REST api, all the way to completion and deployment.
            </p>
            <p>I'll journey with you to some of the projects I've worked on.</p>
            <Button><Link to="/work">See My Work</Link></Button>
        </section>
    </Page>
)