import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us- KartKaro"}>
      <div className="aboutus">
        <div className="col-md-6">
          <img
            src='/images/about.webp'
            alt="about"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h3 className='bg-dark p-2 text-white text-center'>About Us</h3>
      <p><strong>Welcome to KartKaro!</strong></p>
      <p>
        At KartKaro, we believe that shopping should be an enjoyable and seamless experience. Founded with a passion for quality and convenience, we are dedicated to bringing you a curated selection of products that enhance your lifestyle. Whether you're looking for the latest gadgets, stylish apparel, or home essentials, we have something for everyone.
      </p>
      <h4>Our Mission</h4>
      <p>
        Our mission is simple: to make shopping easy, enjoyable, and accessible for all. We aim to provide a platform where customers can discover unique products from trusted brands, all in one place. With a focus on quality and affordability, we strive to meet the diverse needs of our customers while delivering exceptional service.
      </p>
      
      <h4>What We Offer</h4>
      <ul>
        <li><strong>Curated Selection:</strong> Our team handpicks every item in our store, ensuring that we only offer products that meet our high standards for quality and value.</li>
        <li><strong>Customer-Centric Service:</strong> Your satisfaction is our priority. Our dedicated support team is here to assist you with any questions or concerns you may have.</li>
        <li><strong>Secure Shopping:</strong> We prioritize your security with safe payment options and data protection, so you can shop with confidence.</li>
      </ul>
      <h4>Join Our Community</h4>
      <p>
        We’re more than just an e-commerce site; we’re a community of shoppers who love finding great products at fantastic prices. Follow us on social media to stay updated on the latest trends, exclusive offers, and more!
      </p>
      
      <p>
        Thank you for choosing KartKaro. We’re excited to be a part of your shopping journey!
      </p>
        </div>
      </div>
    </Layout>
  )
}

export default About