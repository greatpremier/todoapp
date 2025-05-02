import { Link, NavLink, Router } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClipboard } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { hover } from "@testing-library/user-event/dist/hover"
import './styles.css'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { faRegistered } from "@fortawesome/free-solid-svg-icons"

const styles = {
  'listStyleType' : 'none',
  'fontSize' : '20px',
  'textDecoration' : 'none',
  'display' : 'inline',
  'gap' : '5'
  }

const Nav = () => {
  return (
    <div>
       <nav className="bg-light">
        <span className="logo"><Link to="/home">ToDoApp</Link></span>
        <span className="lists">
          <ul className="navItems">
            <Link to='/todoform' className="btn btn-default buttonStyle"><FontAwesomeIcon icon={faPlus}/></Link>
            <Link to='/settings' className="btn btn-default buttonStyle"><FontAwesomeIcon icon={faGear} /></Link>
            <Link to='/user' className="btn btn-default buttonStyle" id="userButton"><FontAwesomeIcon icon={faUser}/></Link>
            <Link to='/register' className="btn btn-primary">Register</Link>
            <Link to='/login' className="btn btn-primary">Login</Link>
          </ul>
        </span>
       </nav>
    </div>
  )
}

const Header = () => {
    return(
      <>
      <Nav />
      </>
    )
}

export default Header