import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../Layout/Page'
import Button from '../../UI/Button'
import List from '../../UI/List'
import ProjectItem from './ProjectItem'

import "./styles.sass"

const projects = [
    {
        name: "Social media dashboard with theme switcher",
        image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/g6fjlhaxxwjccox75v8n.jpg",
        link: "https://www.frontendmentor.io/solutions/socialmediadashboardwiththemeswitchermaster-JhmlyTr5NZ",
        preview: "https://social-media-dashboard-sable-six.vercel.app/",
        code: "https://github.com/md5dalton/media-dashboard.git"
    },
    {
        name: "Easybank landing page solution",
        image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/fwroqoaorbmjltxewnkv.jpg",
        link: "https://www.frontendmentor.io/solutions/easybank-landing-page-solution-LgK3H048Bo",
        preview: "https://easybank-plum.vercel.app/",
        code: "https://github.com/md5dalton/easybank.git"
    },
    {
        name: "REST Countries API with color theme switcher",
        image: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Screenshots/qcbknjrrcxgosj5edhun.jpg",
        link: "https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher--BRfujiUAF",
        preview: "https://rest-countries-md5dalton.vercel.app/",
        code: "https://github.com/md5dalton/rest-countries"
    }
]

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
            <Link to="/contact"><Button>contact me</Button></Link>
        </section>
        <div className="projects">
            <section>
                <p>These are some projects I've completed and managed to put on my github repository:</p>
                <List items={projects} itemHandler={(item, index) => <ProjectItem key={index} {...item} />} />
            </section>
        </div>
    </Page>
)