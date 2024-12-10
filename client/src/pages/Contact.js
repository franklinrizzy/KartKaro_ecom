import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend, BiPhoneCall, BiSupport} from 'react-icons/bi'

const Contact = () => {
  return (
    <Layout title={"Contact us- KartKaro"}>
      <div className="row contactus">
        <div className='col-md-6'>
          <img src='images/contact.jpg'
            alt='contactus'
            style={{width: '100%'}} />
        </div>
        <div className='col-md-4'>
          <h3 className='bg-dark p-2 text-white text-center'>Contact Us</h3>
          <p className='text-justify mt-2'>Contact us for any queries and information about our services</p>
          <p className='mt-3'>
            <BiMailSend /> : help@kartkaro.com
          </p>
          <p className='mt-3'>
            <BiPhoneCall /> : +91 78900 00001 
          </p>
          <p className='mt-3'>
            <BiSupport /> : 1800-1234-4567 (toll free) 
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact