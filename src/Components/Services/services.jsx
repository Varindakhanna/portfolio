import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs' 

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX DESIGN</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi.</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default services
