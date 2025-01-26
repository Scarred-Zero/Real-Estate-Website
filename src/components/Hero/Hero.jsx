import React from 'react'
import './Hero.css'
import {HiLocationMarker } from 'react-icons/hi';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div>
      <section className="hero__wrapper">
        <div className="paddings innerWidth flexCenter hero__container">

          <div className="flexColStart hero__left">
            <div className="hero__title">
              <div className="orange__circle"></div>
              <motion.h1 
                initial={{y: "2rem", opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 4, type: 'spring'}}
              >
                Discover <br/>
                Most Suitable <br />
                Property
              </motion.h1>
            </div>

            <div className="flexColStart hero__des">
              <span className='secondaryText'>
                Find a variety of properties taht suit you very easily
              </span>
              <span className='secondaryText'>
                Forget all difficulties in finding a residence for you
              </span>
            </div>

            <div className="flexCenter search__bar">
              <HiLocationMarker color='var(--blue)' size={20}/>
              <input type="text" />
              <button className='btn'>
                Search
              </button>
            </div>

            <div className="flexCenter stats">

              <div className="flexColStart stat">
                <span>
                  <CountUp start={8000} end={9000} duration={3} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>Premium Products</span>
              </div>

              <div className="flexColStart stat">
                <span>
                  <CountUp start={1000} end={2000} duration={3} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>Happy Customers</span>
              </div>

              <div className="flexColStart stat">
                <span>
                  <CountUp end={30} />
                  <span>+</span>
                </span>
                <span className='secondaryText'>Award Winning</span>
              </div>

            </div>
          </div>

          <div className="flexCenter hero__right">
            <motion.div 
              initial={{x: "7rem", opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 2, type: 'easeIn'}}
              className="img__container">
              <img src="./hero-image.png" alt="Banner Image" />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
