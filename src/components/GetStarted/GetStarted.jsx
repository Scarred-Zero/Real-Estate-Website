import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className='g__wrapper'>
      <div className="paddings innerWidth g__container">
        <div className="flexColCenter inner__container">
            <span  className='primaryText'>Get Started with Homyz</span>
            <span className='secondaryText'>
                Subscribe and find super attractive price quotes from
                <br />
                Find your residence soon
            </span>
            <button className="btn">
                <a href="mailto:example@example.com">Get Started</a>
            </button>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
