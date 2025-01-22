import './SelectionBar.css'

interface Props {
    skillsList: string[];
    handleItemClick: (item: number) => void;
    selectorLeft: number;
}

const SelectionBar = ({ skillsList, handleItemClick, selectorLeft }: Props) => {

    return (
        <div>
            <ul className="skills-list">
                {skillsList.map((item, index) => (
                    <li
                        key={index}
                        className='skill-list-item'
                        onClick={() => handleItemClick(index)}
                    >
                        {item}
                    </li>
                ))}
                <div className="skill-selector" style={{ left: `${selectorLeft}px` }}></div>
            </ul>
        </div>
    )
}

export default SelectionBar
