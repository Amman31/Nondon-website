import './AboutUs.css'
import nondon from '../assets/nondon.mp4'

const AboutUs = () => {
    return (
        <div className="aboutus-root">
            <video autoPlay muted loop id="bg-video">
                <source src={nondon} type="video/mp4" />
            </video>
            <div className='about-us-body'>
                <h1>About Us</h1>
                <p>Welcome to Nondon. Your South Asian culinary escape in Helsinki. Explore the vibrant flavors of South Asian foods in every bite. From traditional classics to fusion pizzas, indulge in a taste adventure unlike any other. Join us for lunch and discover the essence of South Asian cuisine, right here in the heart of Helsinki.</p>
            </div>
        </div>
    )
}

export default AboutUs
