import { Link } from "react-router-dom"

const Footer = () => {
    const scrolltoTop=()=>{
        window.scrollTo(0,0)
    }
    return (
        <div className="footer" style={{ display: 'flex',marginTop:"40px" }}>
            <div className="footer-first" style={{ display: 'flex', flexDirection: 'column', marginLeft: '30px' }}>
                <h7>Ask Experts</h7>
                <span>Fb./Ig./Tw./Be.</span>
            </div>
            <div className="footer-second">
                <p style={{ marginLeft: '30px' }}>Product</p>
                <hr className="footer-line" />
                <footer className="footer">
                    <div className="footer-content">
                        <ul className="footer-dot-list">
                            <li><Link to='/' onClick={scrolltoTop()}>Home</Link></li>
                            <li><Link to='/about' onClick={scrolltoTop()}>About</Link></li>
                            <li><Link to='/service' onClick={scrolltoTop()}>Service</Link></li>
                            <li><Link to='/contacts'onClick={scrolltoTop()}>Contacts</Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
            <div className="footer-third">
                <p style={{ marginLeft: '30px' }}>Company</p>
                <hr className="footer-line" />
                <footer className="footer">
                    <div className="footer-content">
                        <ul className="footer-dot-list">
                            <li><a href="#home">About</a></li>
                            <li><a href="#about">News</a></li>
                            <li><a href="#services">Contacts</a></li>
                            <li><a href="#contact">Testimonials</a></li>
                            <li><a href="#home">Our team</a></li>
                            <li><a href="#about">Our Approach</a></li>
                        </ul>
                    </div>

                </footer>
            </div>
            <div className="footer-fourth">
                <p>Adress</p>
                <footer className="footer">
                    <div className="footer-content">
                        <p>1700 W Blancke St, kiyev
                            port south USA, America
                        </p>
                        <div className="btn" style={{marginRight:'90px'}}><br></br><br></br><br></br>
                        <button>Book an Appointment</button>
                        </div>
                      
                    </div>

                </footer>
            </div>
        </div>
    )
}

export default Footer