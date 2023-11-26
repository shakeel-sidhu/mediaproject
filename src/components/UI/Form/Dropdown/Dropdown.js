import { useEffect, useState } from "react";
import "./Dropdown.css"

const data = [{id: 0, label: "Istanbul, TR (AHL)"}, {id: 1, label: "Paris, FR (CDG)"}];

const Dropdown = ({dropdownData}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }
  
  return (
    <div className='dropdown'>
        <div className="buttonWrapper">
      <button className='dropdown-header' onClick={toggleDropdown}>
        {/* {selectedItem ? items.find(item => item.id == selectedItem).label : "Select your destination"} */}
        {isOpen ? "Search" : "Select"}

        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
        {isOpen ? <img src="/images/elementsarrow.svg"/> : <img src="/images/elementsdown.svg"/>}

      </button>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {dropdownData.map((item,i) => (
          <div className="dropdown-item" key={i} onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown;