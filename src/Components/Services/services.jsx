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
              <p>Information Architecture</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Interaction Design</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Usability</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Wireframing</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Visual Design</p>
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
              <p>Mobile-Friendly Layout.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Clean and Bold Typography.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>SEO Optimization.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Cross-browser and device compatibility.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Optimization for Speed.</p>  
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Back-end logic.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Application programming interface (APIs).</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Architecture.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Servers.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Communication with databases.</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default services
