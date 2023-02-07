import React from 'react'
import "../styles/Footer.css";

const Footer = () => {

return (
    <div className='footer'>
        <div>
            <h1>KINGS STORE</h1>
        </div>
        <div className='wrap1'>
            <h3>NEW TO KINGS STORE ?</h3>
            <p>Subscribe to our newsletter to get updates on our latest offers!</p>
            <div className='wrap1-btn'>
                <div>
            <input  type="email" placeholder='ENTER E-MAIL ADDRESS'/>
            </div>
            <div className='male-btn'>
            <button>MALE</button>
            </div>
            <div>
            <button>FEMALE</button>
            </div>
            </div>
        </div>
        <div className='wrap2-btn'>
            <h3>DOWNLOAD KINGS STORE FREE APP</h3>
            <p>Get access to exclusive offers!</p>
            <div>

            </div>
        </div>
        
    </div>
  )
}

export default Footer