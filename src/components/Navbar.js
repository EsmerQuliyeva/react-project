import { useState } from "react";
import { Link } from "react-router-dom"



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="logo">Ask Experts</h1>
          <ul className="nav-links">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/about'>Contacts</Link></li>
            <li><Link to='/about'>Our team</Link></li>
            <li><Link to='/service'>Our Approach</Link></li>
            <li><Link to='/about'>020-230-45-67</Link></li>
            {/* <li className='number'><a href="#">575-33-44</a></li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;