import { useState, useEffect } from 'react';
import SelectionBar from '../components/SelectionBar';
import menuImage1 from '../assets/alacarte1.jpg';
import menuImage2 from '../assets/alacarte2.jpg';
import menuImage3 from '../assets/alacarte3.jpg';
import menuImage4 from '../assets/alacarte4.jpg';
import menuImage5 from '../assets/alacarte5.jpg';
import './Menu.css'
import Selector from '../components/Selector';
import { allMenu } from '../data/MenuData';

interface Menu {
    day: string;
    menu: string[];
    price: string;
    time: string;
}

const Menu = () => {
    const options = ['BUFFET', 'à la carte'];
    const Headers = ['Today', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const [selectedItem, setSelectedItem] = useState(days[(new Date()).getDay()]);
    const [buffetMenu, setBuffetMenu] = useState<Menu | undefined>(undefined);
    const [option, setOption] = useState(options[0]);
    const [selectorLeft, setSelectorLeft] = useState(0);
    const [widthScreen, setWidthScreen] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const innerWidth = window.innerWidth;
            setWidthScreen(innerWidth);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleItemClick = (value: number) => {
        setOption(options[value]);
        if (widthScreen > 430) {
            setSelectorLeft(value * 150);
        }
        else {
            setSelectorLeft(value * 130);
        }
    };

    useEffect(() => {
        const findMenu = () => {
            if (selectedItem === 'today') {
                const dayOfWeek = days[(new Date()).getDay()];
                const correctMenu = allMenu.find((value) => dayOfWeek === value.day);
                setBuffetMenu(correctMenu);
            } else {
                const correctMenu = allMenu.find((value) => selectedItem === value.day);
                setBuffetMenu(correctMenu);
            }
        }
        findMenu();
    }, [selectedItem])

    return (
        <div className='menu-root'>
            <h1>Menu</h1>
            <SelectionBar skillsList={options} selectorLeft={selectorLeft} handleItemClick={handleItemClick} />
            <div style={{ visibility: option === 'BUFFET' ? 'visible' : 'hidden', marginTop: '40px', border: '2px solid yellow' }}>
                <Selector itemsArray={Headers} setSelectedItem={setSelectedItem} />
            </div>
            {option === 'BUFFET' ?
                <ol className='buffet-menu'>
                    <h2>Price: {buffetMenu?.price}</h2>
                    <p>10% discount for all students, pensioners & conscripts</p>
                    <h3>Time: {buffetMenu?.time}</h3>
                    {buffetMenu?.menu.map((item, index) => <li key={index}>{index + 1}. {item}</li>)}
                </ol>
                :
                <div className='alacarte'>
                    <div className='alacarte-menu'><img src={menuImage1} alt="No image" /></div>
                    <div className='alacarte-menu'><img src={menuImage2} alt="No image" /></div>
                    <div className='alacarte-menu'><img src={menuImage3} alt="No image" /></div>
                    <div className='alacarte-menu'><img src={menuImage4} alt="No image" /></div>
                    <div className='alacarte-menu'><img src={menuImage5} alt="No image" /></div>
                </div>}
        </div>
    )
}

export default Menu
