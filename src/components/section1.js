import React from 'react'
import './style/section1.css'

const Section1 = () => {
  return (
    <div className='container'>
        <div className='sub-container'>
            <div className='img-container'>
                <img src='https://www.fyrebox.com/images/fyrebox-community.svg?2' alt=''/>
            </div>
            <div className='text-container'>
                <div>
                    <h1>Image with Text</h1>
                </div>
                <div className='description-text'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>  
                </div>
                <div>
                    <button>Button Label</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Section1
