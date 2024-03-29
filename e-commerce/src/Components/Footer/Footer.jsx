import footer_logo from '../Assets/logo_big.png'
import './Footer.css'
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt='footer_logo' />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contack</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <FaInstagram />
                </div>

                <div className="footer-icons-container">
                    <FaPinterest />
                </div>

                <div className="footer-icons-container">
                    <FaWhatsapp />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer