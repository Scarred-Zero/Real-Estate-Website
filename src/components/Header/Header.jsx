import React, { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import './Header.css'

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' }
    }
  };

  return (
    <section className='header__wrapper'>
      <div className="paddings flexCenter innerWidth header__container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter header__menu" style={getMenuStyles(menuOpened)}>
            <a href="#">Residences</a>
            <a href="#">Our Values</a>
            <a href="#">Contact Us</a>
            <a href="#">Get Started</a>
            <button className='btn'>
              <a href="#">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className="menu__icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  )
}

export default Header
