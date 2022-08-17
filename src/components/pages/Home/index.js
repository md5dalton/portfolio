import React from 'react'
import Page from '../../Layout/Page'
import LinkButton from '../../UI/LinkButton'

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
            <LinkButton to="/contact">contact me</LinkButton>
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
                <div className="ctas">
                    <LinkButton to="/contact">get in touch</LinkButton>
                    <LinkButton to="/about" className="secondary">about me</LinkButton>
                </div>
            </section>
        </div>
        <section className="benefits">
            <h2>Take a quick look of how I work</h2>
            <p>
                I collaborate with your website designers and graphic designers to build your website made from various softwares such as Adobe XD,
                Sketch, Figma and Photoshop, fashion everything from the landing page, site layout and enhance user experience. I integrate data
                from various back-end services through a REST api to make your website more exciting and dynamic. I deploy your website to get it up
                running on a hosting service provider of your choosing.
            </p>
            <p>I'll journey with you to some of the projects I've worked on.</p>
            <LinkButton to="/work">See My Work</LinkButton>
        </section>
    </Page>
)