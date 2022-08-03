import React from 'react'
import Page from '../../Layout/Page'
import Button from '../../UI/Button'

import "./styles.sass"

export default () => (
    <Page name="contact">
        <section className="top">
            <div className="profile"><img src="/images/svg/contact.svg" alt="profile" /></div>
            <h1>Get in touch with me</h1>
        </section>
        <section>
            <p>
                It's always a pleasure to help others like you to bring their amazing website designs to life. Here is my email should you 
                wish to contact me: <a href="mailto:md5daltonggs@gmail.com">md5daltonggs@gmail.com</a>
            </p>
        </section>
        <section>
            <form>
                <div className="form-section">
                    <label>name</label>
                    <input type="text" />
                </div>
                <div className="form-section">
                    <label>your email</label>
                    <input type="email" />
                </div>
                <div className="form-section">
                    <label>your message</label>
                    <textarea></textarea>
                </div>
                <div className="form-section">
                    <Button type="submit" disabled>Send</Button>
                </div>
            </form>
            <p className="side-note">
                *Please note, this contact form is not functional for the moment, it's just a placeholder. Should you need to contact me,
                here is my email: <a href="mailto:md5daltonggs@gmail.com">md5daltonggs@gmail.com</a>
            </p>
        </section>
    </Page>        
)