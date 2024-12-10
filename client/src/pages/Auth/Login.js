import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import "../../styles/authStyles.css";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
  
    //form function
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent form from refreshing the page
      try {
        const res = await axios.post(`/api/v1/auth/login`,{email, password});
          if (res && res.data.success) {
            toast.success(res.data && res.data.success);
            setAuth({
              ...auth,
              user: res.data.user,
              token: res.data.token
            })
            localStorage.setItem('auth', JSON.stringify(res.data))
            navigate(location.state || '/');
          }
          else {
            toast.error(res.data.message)
          }
      } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
    }
  };
  return (
    <Layout title={"Login - KartKaro"}>
    <div className="signup">
      <div className="col-md-6">
        <img
          src='/images/shopping.webp'
          alt="login"
          style={{ width: "95%" }}
        />
      <h3>Welcome to KartKaro</h3>
      <p>Your one-stop shop for everything!</p>
      <ul>
        <li>🛒 Explore thousands of products</li>
        <li>💸 Get amazing deals</li>
        <li>🚚 Fast and reliable delivery</li>
        <li>🔒 Secure payment options</li>
        <li>🛍️ Exclusive offers for members</li>
      </ul>
      </div>
      <div className="col-md-4">
      <form onSubmit={handleSubmit}>
      <h2 className='title'>Welcome to KartKaro!</h2>
      <h6 className='title'>Your one-stop solution for everything.</h6>
      <div className="mb-3">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="InputEmail" placeholder='email' required />
      </div>
      <div className="mb-3">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="InputPassword" placeholder='password' required />
          <div id="emailHelp" className="form-text">Your secret is safe with us.</div>
      </div>
      {/* <div className="mb-3">
      <button type="submit" className="btn btn-primary">Login</button>
      </div>
      <div className="mt-3">
      <a href="/forgot-password" style={{ color: 'black' }}>Forgot Password?</a>
      </div> */}
      <div className="d-flex justify-content-between align-items-center">
          <button type="submit" className="btn btn-primary">Login</button>
          <a href="/forgot-password" style={{ color: 'black', marginLeft: '10px', fontSize: 'small'  }}>Forgot Password?</a>
      </div>
      </form>
      </div>
    </div>
  </Layout>
  )
}

export default Login