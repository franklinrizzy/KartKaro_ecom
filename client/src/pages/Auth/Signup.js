import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/authStyles.css";

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate()
    // new:
    const handleQuestionChange = (e) => {
      setQuestion(e.target.value);
      setAnswer(''); // Clear answer when question changes
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value); // Update gender state based on selected radio button
    };
    //form function
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevent form from refreshing the page
      try {
        const res = await axios.post(`/api/v1/auth/signup`,{
          name, email, phone, password, gender, address, question, answer});
          if (res && res.data.success) {
            toast.success(res.data && res.data.success);
            navigate('/login');
          }
          else {
            toast.error(res.data.message)
          }
      } catch (error) {
        console.error("Signup Error:", error)
        toast.error('Unable to submit')
    }
  };
  return (
    <Layout title={"SignUp - KartKaro"}>
      <div className="signup">
        <div className="col-md-6">
          <img
            src='/images/shopping.webp'
            alt="signup"
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
            <input type="text" 
            value={name} onChange={(e) => setName(e.target.value)} 
            className="form-control" id="InputName" placeholder='name' required />
        </div>
        <div className="mb-3">
            <input type="email" 
            value={email} onChange={(e) => setEmail(e.target.value)} 
            className="form-control" id="InputEmail" placeholder='email' required />
        </div>
        <div className="mb-3">
            <input type="tel" 
            value={phone} onChange={(e) => setPhone(e.target.value)} 
            className="form-control" id="InputNumber" placeholder='mobile number' required />
        </div>
        <div className="mb-3">
            <input type="password" 
            value={password} onChange={(e) => setPassword(e.target.value)} 
            className="form-control" id="InputPassword" placeholder='password' required />
            <div id="passwordHelp" className="form-text">Your secret is safe with us.</div>
        </div>
        <div className="mb-3">
        <div className="d-flex align-items-center">
            <div className="form-check me-3">
            <input type="radio" className="form-check-input" id="genderMale" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} required />
            <label className="custom-radio" htmlFor="genderMale"></label>
            <label className="form-check-label" htmlFor="genderMale">Male</label>
            </div>
            <div className="form-check me-3">
            <input type="radio" className="form-check-input" id="genderFemale" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} required />
            <label className="custom-radio" htmlFor="genderFemale"></label>
            <label className="form-check-label" htmlFor="genderFemale">Female</label>
            </div>
            <div className="form-check">
            <input type="radio" className="form-check-input" id="genderOther" name="gender" value="other" checked={gender === 'other'} onChange={handleGenderChange} required />
            <label className="custom-radio" htmlFor="genderOther"></label>
            <label className="form-check-label" htmlFor="genderOther">Other</label>
            </div>
        </div>
        </div>
        <div className="mb-3">
              <textarea className="form-control" 
              value={address} onChange={(e) => setAddress(e.target.value)} 
              id="InputAddress" placeholder="address" rows="3" required></textarea>
          </div>
        <div>
          <div className="mb-3">
            <select id="ChooseQuestion" value={question} onChange={handleQuestionChange} className="form-select">
              <option value=" ">-- Select a question --</option>
              <option value="pet">What was the name of your first pet?</option>
              <option value="city">In what city were you born?</option>
              <option value="book">What is your favorite book?</option>
              <option value="street">What is the name of the street you grew up on?</option>
              <option value="school">What was the name of your elementary school?</option>
            </select>
          </div>
          <div className="mb-3">
            <input type="text" 
            value={answer} onChange={(e) => setAnswer(e.target.value)} 
            className="form-control" id="InputAnswer" placeholder='answer' required />
        </div>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="check1" required />
            <label className="form-check-label" htmlFor="check1">Accept all privacy Policy</label>
        </div>
        <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        </div>
      </div>
    </Layout>
  )
}

export default Signup