import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common';

const Residencies = () => {
    return (
        <section className='residencies__wrapper'>
            <div className="paddings innerWidth residencies__container">
                <div className="residencies__head flexColStart">
                    <span className='whiteText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>

                <Swiper {...sliderSettings}>
                    <SliderBtns />
                    {data.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="flexColStart residencies__card">
                                <img src={card.image} alt={card.title} />

                                <span className='secondaryText residencies__price'>
                                    <span style={{ color: 'orange' }}>$</span>
                                    <span>{card.price}</span>
                                </span>

                                <span className='primaryText'>{card.title}</span>
                                <span className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies;

const SliderBtns = () => {
    const swiper = useSwiper();
    return (
        <div className="flexCenter residencies__btns">
            <button onClick={() => swiper.slidePrev()}>
                <i className="fa fa-angle-left"></i>
            </button>
            <button onClick={() => swiper.slideNext()}>
                <i className="fa fa-angle-right"></i>
            </button>
        </div>
    );
};
