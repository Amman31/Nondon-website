import './Contact.css'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='contact-root'>
            <h1>Contact us</h1>
            <div>
                <a href="tel:+358442485548">
                    <p><IoMdCall color='aliceblue' size={30} />+358 442485548</p>
                </a>
                <a href="mailto:elssi.ravintola@gmail.com">
                    <p><MdEmail color='aliceblue' size={30} />elssi.ravintola@gmail.com</p>
                </a>
                <a href="https://www.facebook.com/Nondon.Elssi" target="_blank" rel="noopener noreferrer">
                    <p><FaFacebook color='aliceblue' size={30} />www.facebook.com/Nondon.Elssi</p>
                </a>
            </div>
        </div>
    )
}

export default Contact
