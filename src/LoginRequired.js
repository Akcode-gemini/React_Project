import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
export default function LoginRequired() {
    const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    // Start the countdown timer 
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirect to login page after the countdown reaches 0
    if (countdown === 0) {
      navigate("/login");
    }

    return () => {
      clearInterval(timer);
    };
  }, [navigate, countdown]);
  return (
    <div>
      <h1>Login Required</h1> 
      <p>You are redirecting to Login Page in {countdown} seconds</p>
    </div>
  )
}
