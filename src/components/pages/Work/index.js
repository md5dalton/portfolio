import React from 'react'
import Page from '../../Layout/Page'
import LinkButton from '../../UI/LinkButton'
import List from '../../UI/List'
import ProjectItem from './ProjectItem'

import projects from "./data.json"

import "./styles.sass"

const steps =[
    {
        icon: "tv",
        text: "your design"
    },
    {
        icon: "code-working",
        text: "development"
    },
    {
        icon: "link",
        text: "deployment"
    }
]

export default () => (
    <Page name="work">
        <section className="top">
            <img src="/images/svg/work.svg" />
            <h1>My work</h1>
        </section>
        <section className="story">
            <p>
                Most of the work I made developing web applications were personal hobbies and projects that solved my everyday computer use
                problems. I never really thought of making a career out of this. These projects don't adhere to best practices such as writing 
                standard, efficient, and functional code. They're running on my local network and I've not deployed them on the internet.
            </p>
            <p>
                It wasn't until recently that I realised that in order for me to collaborate with other web developers to achieve a smooth product
                development, I needed to be aware of the main trends and technologies and to be mindful of the emerging technologies and changes
                in the internet to develop seamless web experience.
            </p>
            <LinkButton to="/contact">contact me</LinkButton>
        </section>
        <div className="projects">
            <section>
                <p>These are some projects I've completed and managed to put on my github repository:</p>
                <List items={projects} itemHandler={(item, index) => <ProjectItem key={index} {...item} />} />
            </section>
        </div>
    </Page>
)