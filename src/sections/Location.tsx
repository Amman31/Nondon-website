import './Location.css'

const Location = () => {
    return (
        <div className="location-root">
            <div className='location-body'>
                <h1>Our Location</h1>
                <p>Malmin asematie 6, 00700</p>
                <p>Helsinki, Finland</p>
                <a href="https://maps.app.goo.gl/1L1jw5f9n3QfTrED7" target='_blank'><button className='openmaps'>Open Maps</button></a>
            </div>
            <a href="https://maps.app.goo.gl/1L1jw5f9n3QfTrED7" target='_blank'><div className='location-image'></div></a>
        </div>
    )
}

export default Location
