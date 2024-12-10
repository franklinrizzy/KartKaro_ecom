import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../components/Layout/Layout";
import "../../styles/authStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  const navigate = useNavigate();
  
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
    setAnswer(''); // Clear answer when question changes
  };

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password- Ecommerce APP"}>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Reset your Password</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="email"
              required
            />
          </div>
          <div className="mb-3">
            <select id="ChooseQuestion" value={question} onChange={handleQuestionChange} className="form-select">
              <option value="">-- Select a question --</option>
              <option value="pet">What was the name of your first pet?</option>
              <option value="city">In what city were you born?</option>
              <option value="book">What is your favorite book?</option>
              <option value="street">What is the name of the street you grew up on?</option>
              <option value="school">What was the name of your elementary school?</option>
            </select>
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="ResetAnswer"
              placeholder="answer"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="newPassword"
              placeholder="Enter New Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;