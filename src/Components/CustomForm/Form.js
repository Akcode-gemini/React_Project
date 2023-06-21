import React from 'react'
import Navbar from '../CustomNavbar/Navbar'

export default function Form() {
  // const navigate = useNavigate();
  // const [titles, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [asignee, setAsignee] = useState("");
  // const [duedate, setDueDate] = useState("");

  const link = [
    { name: "Create", path: "/create" },
    { name: "View", path: "/view" },
    { name: "Logout", path: "/logout" }
  ];
  const title = "Create/View"
  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   if (title === "") {
  //     alert("Title is empty");
  //     return;
  //   } else if (description === "") {

  //     alert("Description is empty");

  //     return;

  //   } else if (asignee === "") {

  //     alert("Asignee is empty");

  //     return;

  //   } else if (duedate === "") {

  //     alert("Due Date is empty");

  //     return;

  //   }
  //   const users = JSON.parse(localStorage.getItem("users")) || [];




  //   const length = users.length;




  //   const newUser = {
  //     id: length.toString(),
  //     title,
  //     description,
  //     asignee,
  //     duedate,
  //   }
  //   users.push(newUser);




  //   localStorage.setItem("users", JSON.stringify(users));




  //   // Clear input fields




  //   setTitle("");




  //   setDescription("");




  //   navigate("/view");
  


  return (
    <div>
      <Navbar link={link} title={title} ></Navbar>
      </div>
      
  )
}
