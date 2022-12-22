import React from 'react'
import pic from '../assets/Ron.png'

export default function Info() {
  return (
    <div className='info--container'>
      <img src={pic} alt='Ron'/>
      <div className="info--text">
        <h1>Ron Alec Balid</h1>
        <h3>Frontend Developer</h3>
        <a href="https://www.horada.site">
          <small>horada.site</small>
        </a>
      </div>
      <div className="info--buttons">
        <button>
          <i class="fa-solid fa-envelope"></i>
          Email
        </button>
        <button>
          <i class="fa-brands fa-linkedin"></i>
          LinkedIn
        </button>
      </div>
    </div>
  )
}