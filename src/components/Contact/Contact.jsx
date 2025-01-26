import React from 'react'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill, BsFillHandIndexFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact__wrapper'>
            <div className="paddings innerWidth flexCenter contact__container">
                <div className="flexColStart contact__left">
                    <span className='whiteText'>Our Contacts</span>
                    <span className='primaryText'>Easy to contact</span>
                    <span className="secondaryText">
                        We are always ready to help by providing the best services for you. We believe a good place to live can make your life better.
                    </span>
                    <div className="flexColStart contact__modes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className="secondaryText">0000-000-0000</span>
                                    </div>
                                </div>
                                <div className="flexCenter btn">Call Now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className="secondaryText">0000-000-0000</span>
                                    </div>
                                </div>
                                <div className="flexCenter btn">Chat Now</div>
                            </div>
                        </div>
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className="secondaryText">0000-000-0000</span>
                                    </div>
                                </div>
                                <div className="flexCenter btn">Video Call Now</div>
                            </div>
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className="secondaryText">0000-000-0000</span>
                                    </div>
                                </div>
                                <div className="flexCenter btn">Message Now</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact__right">
                    <div className="img__container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
