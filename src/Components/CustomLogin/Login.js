import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../CustomNavbar/Navbar';
export default function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Check if user exists 
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((user) => user.username === username);
  
      if (!user) {
        alert('User not found. Please register.');
        return;
      } else if (user.password !== password) {
        alert('Invalid password. Please try again.');
        return;
      } else { 
        props.onLogin()
        setTimeout(() => {
          navigate('/create');
        }, 2000);
        //   alert("Login successful!");
      }
      setUsername('');
      setPassword('');
    };
    const link = [
      { name: "Login", path: "/login" },
      { name: "Register", path: "/" },
    ]
    const title="Login/Logout"
  
    return (<> 
        <Navbar link={link} title={title} />
      <div className="container customContainer">
        <br /><br /><br /><br />
        <h2 className="heading">Login</h2>
  
         <div className="backgroundImg"></div> 
        <form className="formContainer" onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Username:</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={handleUsernameChange}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="off"
            />
          </div>
          <button className="btn btn-primary customButton" type="submit">
            Login
          </button>
          <br />
          <br />
        <p className='notedText'>
          <span className='notUserText'>Not a user?</span> <a className='nottedLink' href="/">Register</a>
        </p>
        </form>
      </div> 
      </>
    );
  
}
