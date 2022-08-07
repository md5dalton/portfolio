import React from 'react'
import { Link } from 'react-router-dom'
import Page from '../../Layout/Page'
import Button from '../../UI/Button'

import "./styles.sass"

export default () => (
    <Page name="about">
        <section className="top">
            <div className="profile"><img src="/images/svg/about.svg" alt="profile" /></div>
            <h1>My story</h1>
        </section>
        <section>
            <p className="caps">Hello, I'm Majara, I'm from Lesotho</p>
            <p>
                I rembember the first time I learnt about HTML back in 2014 right after I finished high school. I was reading through my
                school's website when I was fascinated by the <span>"About Us"</span> section where they mentioned the team that built the 
                website and it was the IT staff members of whom some I knew. I was intrigued, I wanted to able to make something like that one
                day.
            </p>
            <p>
                That same year, I bought my first tablet and I read some article online that explained how I can build websites with HTML. I
                jumped right into learning HTML. I wrote my first HTML file that was a <span>"Our Leader"</span> page which is about the
                school's principal teacher to simulate my primary school's website <span>(of which to this day they still don't have one by 
                the way, I'm planning on fixing that)</span>, I added a picture, some text wrapping on the right side the image and some grey
                background color.   
            </p>
            <p>
                Unfortunately, right around that time that's when I started applying for medical school and the following year I enrolled, so 
                I had less time to learn programming. Though, I did here and there find time to learn more in: CSS, Javascript and PHP.
            </p>
            <p>
                By 2017 I had quiet number of projects running locally on my laptop. Just to mention a few, a music player - because it was just
                convinient to have one music library in a single place and access it from any device, youtube and instagram clones, website image
                crawler, expense tracker, image viewer, etc.
            </p>
            <p>
                You may be wondering, but why running locally. Well, at the time of writting this, it had been roughly a month since I finished
                medical school in Cuba and just a few weeks before my trip back home hence the creation of this portfolio. 
            </p>
            <p>
                You may or not know this, but Cuba is ages behind most countries technologically. It was only in 2018 that it's people were able
                to have access to internet and even then, it was very expensive. Regardless, around that same year it occured to me that I could
                built a career I love by making websites. Sadly, there wasn't much I could do then to persue this matter any further due to the
                existing political climate between Cuba and USA.
            </p>
            <p>
                However, I still had hopes that when I finish with my studies and move permanently back home in Lesotho, I can continue my journey
                as a web developer. So, I kept self-teaching. In 2020 that's when covid hit, it was really a hard time for most of us but I tried
                my best to look on the brighter side which was suddenly, I had more time on my hands. I geared up my learning in various technologies
                such as React JS, LESS, Sass/Scss, some in the backend such as Django, Laravel and version control: Git.
            </p>
            <p>
                Fastforward to 2022, I had just finished with medical school and was ready to go back home.
            </p>
            <p>
                I've learnt a lot as a web developer working on personal projects and submitting some solutions to
                <a href="https://www.frontendmentor.io/profile/md5dalton" target="_blank">Frontend Mentor</a> and my goal is to contribute my skills as
                a frontend web developer so I can help businesses and their creative designers to build websites with efficient code by using best software
                development practices whilst creating user interface by using standard HTML/CSS practices to ensure accessibility and easier maintanance
                thereafter. Hopefully with this I can be part of your web development team for your project.
            </p>
        </section>
        <section className="CTA-warapper">
            <Button><Link to="/contact">Get in touch</Link></Button>
        </section>
    </Page>
)