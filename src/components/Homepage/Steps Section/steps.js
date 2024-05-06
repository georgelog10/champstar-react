import React from 'react'
import './steps.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faFolderTree, faPenNib } from '@fortawesome/free-solid-svg-icons';

const Steps = () => {
  return (
    <section className='w-75 my-0 mx-auto py-5 px-0 steps-section'>
        <h1 className='text-center fs-1 fw-bolder'>Title</h1>
        <div className='w-25 my-1 mx-auto divider'></div>
        <p className='text-center mt-2'>Află cum să te înscrii în concursuri diverse și să-ți demonstrezi talentul <br/> și cunoștințele într-o competiție plină de satisfacții și recompense.</p>
        <div className='d-flex mt-4 steps-cards'>
            <div className='p-5 text-center text-white steps-card'>
                <FontAwesomeIcon className="fs-1 mb-3 steps-card-icon" icon={faFolderTree} />
                <h1 className='fs-1 mb-2'>Card Title</h1>
                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='p-5 text-center text-white steps-card'>
                <FontAwesomeIcon className="fs-1 mb-3 steps-card-icon" icon={faPenNib}/>
                <h1 className='fs-1 mb-2'>Card Title</h1>
                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='p-5 text-center text-white steps-card'>
                <FontAwesomeIcon className="fs-1 mb-3 steps-card-icon" icon={faAward}/>
                <h1 className='fs-1 mb-2'>Card Title</h1>
                <p className='mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </section>
  )
}

export default Steps