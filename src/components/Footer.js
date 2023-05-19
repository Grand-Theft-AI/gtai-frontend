import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-black text-white text-center font-header relative bottom-0 right-0 left-0 p-[5px] text-sm">
      <span>DISCLAIMER: THIS IS A NOVELTY APPLICATION & IS NOT USED FOR STEALING CARS.</span>
      <br></br>
      <span><NavLink to={'/aboutus'}>About Us</NavLink></span>
    </footer>
  )
}

export default Footer
