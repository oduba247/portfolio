import React from 'react'
import '../Style/Contact.css'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {GrSend} from 'react-icons/gr'



const Contact = () => {
    return (
        <div className="contacts" id="contact-me">
            <div className="">
                <div className="contact-content">
                    <h2 cl>Hi there,</h2>
                    <h3 className="intouch">
                        Let's discuss your project !<br />
                    </h3>

                    <div className='sub-contact-content'>
                        <div>
                            <h4 className='gothere'>
                            I am open to new opportunities,let build something ! From simple landing pages to huge project,freelance jobs,etc.If you have other request or question,please send me a message
                            </h4>
                            <div className='send'>
                            <a href="mailto:odubatomiwa@gmail.com" class="button">SEND ME A MESSAGE <GrSend/></a>
                            </div>
                    
                        </div>
                        <div className='sub-contact-content2'>
                            <div className='mail'>

                                <p class="linking">Feel free to contact me via email</p>
                                <a href="mailto:odubatomiwa@gmail.com">
                                    <p className='mails'><MdEmail /> odubatomiwa@gmail.com</p>
                                </a><br />
                                <p class="links">Or Find Me On Social Media:</p>
                            </div>
                            <div className='socialmedia'>
                                <a href="https://www.linkedin.com/in/oduba-ayotomiwa-emmanuel-aa076b251" target="blank">
                                    <FaLinkedin /> Linkedin
                                </a>
                                <a href="https://instagram.com/_tomly47_?igshid=YmMyMTA2M2Y=" target="blank">
                                    <FaInstagram /> Instagram
                                </a>
                                <a href="https://github.com/oduba247 /" target="blank">
                                    <FaGithub /> Github
                                </a>
                                <a href="https://twitter.com/tomly_47?s=11&t=jFKHVi0nXN8WqH_W-CrSig" target="blank">
                                    <FaTwitter />Twitter
                                </a>
                            </div>
                            <div className='madewithlove'>
                                <p className='madewith'>Made  by<a href="https://instagram.com/thisisadelakun?igshid=YmMyMTA2M2Y=" target="blank">@TommyCloud</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Contact