import React,{useState} from 'react'
import Navbar from '../CustomNavbar/Navbar';

export default function Registration() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
   const[usernameError,setUsernameError]=useState("");
   const[passwordError,setPasswordError]=useState("");
   const[nameError,setNameError]=useState("");

    const handleUsernameChange = (e) => {
        const value =e.target.value;
        setUsername(value);
        setUsernameError("");
        if(!/^[a-zA-Z0-9]+$/.test(value)){
            setUsernameError("Username should contain only letters and numbers");
        }
        else if(value.length<5){
            setUsernameError("Username should be atleast 5 characters long");
        }
        else if(value.length>20){
            setUsernameError("Username should not exceed 20 characters");
        }
    };

    const handlePasswordChange = (e) => {
        const value =e.target.value;
        setPassword(value);
        setPasswordError("");
        if(value.length<5){
            setPasswordError("Password should be atleast 5 characters long");
        }
    };

    const handleNameChange = (e) => {
        const value =e.target.value;
        setName(value);
        setNameError("");
        if(!/^[a-zA-Z\s]+$/.test(value)){
            setNameError("Name should contain only letters and spaces");
        }
        else if(value.length<3){
            setNameError("Name should be atleast 3 characters long");
        }
        else if(value.length>30){
            setNameError("Name should not exceed 30 characters");
        }
    };

    // const handleEmailChange = (e) => {
    //   setEmail(e.target.value);
    // };

    // const handleMobileChange = (e) => {
    //   setMobile(e.target.value);
    // };

    const handleRegister = (e) => {
        e.preventDefault();
        //validate fields before registration
        if(nameError||usernameError||passwordError){
            return;
        }

        // Check if user already exists
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find((user) => user.username === username);

        if (existingUser) {
            alert("User already exists. Please login.");
            return;
        }

        // Register new user

        const newUser = {
            username,
            password,
            name,
        };
        
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        

        alert("Registration successful. Please login.");
        setUsername("");
        setPassword("");
        setName("");
    };
    
    
    const link = [
        { name: "Login", path: "/login" },
        { name: "Register", path: "/" },
    ]
    const title = "Login/Logout"
    return (<>
        <Navbar link={link} title={title} />
        <div className="container customContainer">
            <br /><br /><br /><br />
            <h2 className="heading">Register</h2>
            {/* <div className="backgroundImg"></div> */}
            <div className="row">
                <div className="">
                    <form className="formContainer" onSubmit={handleRegister}>
                        <div className="form-group">
                            <label className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Enter the name"
                            />
                            {nameError&& <div className='error  text-danger'>*{nameError}</div>}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={handleUsernameChange}
                            />
                            {usernameError&& <div className='error  text-danger'>*{usernameError}</div>}
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder=""
                            />
                            {passwordError&& <div className='error  text-danger'>*{passwordError}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary customButton">
                            Register
                        </button>
                        <br />
                        <br />
                        <p className="notedText">
                            <span className="alreadyUserText">Already a user? </span> <a className="nottedLink" href="/login">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </>
    );

}
