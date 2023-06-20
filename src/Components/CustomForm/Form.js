import React from 'react'
import Navbar from '../CustomNavbar/Navbar'
export default function Form() {
  
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
  )
}
