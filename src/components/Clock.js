import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
export default function Clock(props) {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time)
  const UpdateTime = ()=>{
   time = new Date().toLocaleTimeString()
  setCtime(time);
  }
  setInterval(UpdateTime,1000)
  return (
    <>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh', backgroundColor: props.mode==="dark"?"black":"white", margin: "0px", color: props.mode==="dark"?"white":"black", fontSize: "50px"}}> {ctime} </h1>
    </>
  )
}
