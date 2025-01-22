import { useState, useEffect, useRef } from 'react';
import { FaChevronDown } from "react-icons/fa";
import './Selector.css'

interface Props {
    setSelectedItem: (category: string) => void;
    itemsArray: string[];
}

const Selector = ({ setSelectedItem, itemsArray }: Props) => {
    const [actualCategory, setActualCategory] = useState(itemsArray[0])
    const [isOpened, setIsOpened] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleItemClick = (value: string) => {
        setSelectedItem(value.toLowerCase().replace(/\s/g, ''));
        setActualCategory(value);
        setIsOpened(false);
    };

    const handleDropdownClick = () => {
        setIsOpened(!isOpened);
    };

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (
                isOpened &&
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setIsOpened(false);
            }
        };

        document.addEventListener("mousedown", checkIfClickedOutside);

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [isOpened]);

    return (
        <div className='outerContainerSelector'>
            <div className="boxSelector" ref={dropdownRef}>
                <div className={`dropdownButton ${isOpened ? 'active' : ''}`} onClick={handleDropdownClick} >
                    <span className="left-icon">{actualCategory}</span>
                    <span className="right-icon" style={{ transform: isOpened ? 'rotate(180deg)' : 'rotate(0deg)' }}><FaChevronDown /></span>
                </div>
                <ul className={`items ${isOpened ? 'active' : ''}`}>
                    {itemsArray.map((item, index) => (
                        <li key={index} onClick={() => handleItemClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Selector;
