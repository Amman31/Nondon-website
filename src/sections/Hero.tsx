import './Hero.css'
import { Link } from 'react-router-dom'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Hero = () => {
    return (
        <div className='hero-root'>
            <div className='hero-middle-part'>
                <h1>NONDON</h1>
                <h2>Elssi</h2>
                <p className='moto'>Authentic south asian foods now in your city</p>
                <div className='hero-buttons'>
                    <Link to='linkofquando' className='nav-buttons'><button className='reserve-button all-buttons'>Reserve table</button></Link>
                    <Link to='/menu' className='nav-buttons'><button className='menu-button all-buttons'>Menu</button></Link>
                </div>
                <div className='hero-contact-buttons'>
                    <div onClick={() => window.location.href = 'https://www.facebook.com/Nondon.Elssi'}>
                        <FaFacebook color='rgb(178, 183, 188)' size={40} />
                    </div>
                    <div onClick={() => window.location.href = 'mailto:elssi.ravintola@gmail.com'} ><MdEmail color='rgb(178, 183, 188)' size={40} /></div>
                    <div onClick={() => window.location.href = 'tel:+358442485548'} ><IoMdCall color='rgb(178, 183, 188)' size={40} /></div>
                </div>
            </div>
        </div>
    )
}

export default Hero
