import React from 'react'
import './steps.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons } from '@fortawesome/free-solid-svg-icons';

const Steps = () => {
  return (
    <section className='steps-section'>
        <h1>Title</h1>
        <div className='divider'></div>
        <p>Află cum să te înscrii în concursuri diverse și să-ți demonstrezi talentul <br/> și cunoștințele într-o competiție plină de satisfacții și recompense.</p>
        <div className='steps-cards'>
            <div className='steps-card'>
                <FontAwesomeIcon className="steps-card-icon" icon={faIcons}/>
                <h1>Card Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='steps-card'>
                <FontAwesomeIcon className="steps-card-icon" icon={faIcons}/>
                <h1>Card Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='steps-card'>
                <FontAwesomeIcon className="steps-card-icon" icon={faIcons}/>
                <h1>Card Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </section>
  )
}

export default Steps