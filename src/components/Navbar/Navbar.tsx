import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [menu, setMenu] = useState("seven");


  return (
    <><div className='navbar'>
      <div className="nav-logo">
        <p>Hoàng Ngân wedding</p>
      </div>
      <ul className='nav-menu'>
          <li onClick={()=>{setMenu("seven")}} ><Link style={{textDecorationLine: 'none', color: '#626262'}} to="/seven" >7 tráp </Link>{menu === "seven"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("fine")}}><Link style={{textDecoration: 'none', color: '#626262'}} to="/fine" >5 tráp </Link> {menu === "fine"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("nine")}}><Link style={{textDecoration: 'none', color: '#626262'}} to="/nine" >9 tráp </Link> {menu === "nine"? <hr/>:<></>}</li>
          <li onClick={()=>{setMenu("dam-ngo")}}><Link style={{textDecoration: 'none', color: '#626262'}} to="/dam-ngo" >Dạm ngõ</Link> {menu === "dam-ngo"? <hr/>:<></>}</li>
        </ul>
    </div></>
  )
}
