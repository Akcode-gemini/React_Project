import React,{useState} from 'react'
import { useEffect } from 'react';
import Navbar from '../CustomNavbar/Navbar'
import { useNavigate } from 'react-router-dom';
export default function View() { 
  // const [userdata, setUserdata] = useState([]);

  // const navigate=useNavigate();

  // useEffect(

  //     () => {

  //         // userdata = JSON.parse(localStorage.getItem("users"))

  //         const items=JSON.parse(localStorage.getItem("users"));

  //         if(items)

  //         setUserdata(items);

  //     }, []



  // )



  // const configureRoute=()=>{

  //     navigate('/configure');

  // }
    const link=[
        {name:"Create",path:"/create"},
        {name:"View",path:"/view"},
        {name:"Logout",path:"/logout"}
    ];
    const title="Create/View"
  return (
    
    <div>
      <Navbar link={link} title={title} ></Navbar>
      </div>
//       {userdata.map((value) => (

// <div className="card attire" style={{width: "18rem"}}>

// <div className="card-body cards">

//   <h5 className="card-title">{value.title}</h5>

//   <h5 className="card-title">{value.description}</h5>

//   <h5 className="card-title">{value.asignee}</h5>

//   <h5 className="card-title">{value.duedate}</h5>

// </div>

// </div>



// ))}

// <button onClick={configureRoute}>Click</button>
//     </div>
    
//     </>
  )
}
