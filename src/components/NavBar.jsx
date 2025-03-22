import logo from '../assets/logo.png'
import { FaLinkedin,FaGithub,FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className=" mb-10 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <img className=' w-20' src={logo} alt="" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
        
        <a href="https://www.linkedin.com/in/santhosh-k-826178270/"><FaLinkedin/></a>
        <a href="https://github.com/santhoshmkr"><FaGithub/></a>
        {/* <a href="https://www.instagram.com/badboy_with_good_quality/"><FaInstagram/></a> */}
      </div>
    </nav>
  )
}

export default NavBar
