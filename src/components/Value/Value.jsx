import { React, useState } from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../../utils/accordion';
import './Value.css';

const Value = () => {
  return (
    <section className='value__wrapper'>
      <div className="paddings flexCenter innerWidth value__container"> 
        <div className="value__left"> 
          <div className="img__container"> 
            <img src="./value.png" alt="" /> 
          </div> 
        </div> 
        <div className="flexColStart value__right"> 
          <span className="whiteText"> Our Value </span> 
          <span className="primaryText"> Value we give to you </span> 
          <span className="secondaryText"> 
            We are always ready to help by providing the best services for you <br /> We believe a good place to live can make your life a lot better 
          </span> 
          
          <Accordion className='accordion' allowMultipleExpanded={false} preExpanded={[0]}> 
            {data.map((item, i) => { 
              const [className, setClassName] = useState(null); 
              return (
                <AccordionItem key={i} className={`accordion__item ${className}`} uuid={i}>
                  <AccordionItemHeading> 
                    <AccordionItemButton className='flexCenter accordion__btn'> 
                      <AccordionItemState> 
                        {({ expanded }) => expanded ? setClassName('expanded') : setClassName('collapsed')} 
                      </AccordionItemState> 
                      <div className="flexCenter icon">{item.icon}</div> 
                      <span className="primaryText">{item.heading}</span> 
                      <div className="flexCenter icon"> 
                        <MdOutlineArrowDropDown size={20} /> 
                      </div> 
                    </AccordionItemButton> 
                  </AccordionItemHeading> 
                  <AccordionItemPanel> 
                    <p className='secondaryText'>{item.detail}</p> 
                  </AccordionItemPanel> 
                </AccordionItem>
              )})}
          </Accordion> 
        </div> 
      </div> 
    </section>
  )
}

export default Value;
