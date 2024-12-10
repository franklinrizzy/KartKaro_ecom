import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <h5 className='text-center'>Copyright &copy; 2024 KartKaro. All rights reserved.</h5>
      <p className='text-center mt-3'>
        <Link to='/about'>About Us</Link> |{' '}
        <Link to='/contact'>Contact Us</Link> |{' '}
        <Link to='/policy'>Privacy Policy</Link>
      </p>
    </div>
  )
}

export default Footer