import React, {useState} from 'react';
import './SideNav.css'; // Import the CSS file for styling
import { FaUserCircle, FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineDashboard, AiOutlineInbox, AiOutlineHistory } from "react-icons/ai";
import { TbBook2, TbHelp } from "react-icons/tb";
import { RiGroupLine } from "react-icons/ri";

const Sidebar = () => {

  const [selectedItem, setSelectedItem] = useState("Dashboard"); 

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
      };

  return (
  
    <div className="side-nav">
         <div className="logo">
        <img src="/logo_northeastern.png" alt="Logo" />
      </div>
      <ul>

      <li className={`nav-item ${selectedItem === "Account" ? "selected" : ""}`}
          onClick={() => handleItemClick("Account")}>

          <div className="icon" >
            <FaUserCircle className="icon-size" /> 
          </div>
        <span  className="icon-text-center">  Account </span>
        </li>
        
        <li className={`nav-item ${selectedItem === "Dashboard" ? "selected" : ""}`}
          onClick={() => handleItemClick("Dashboard")}>
          <div className="icon">
            <AiOutlineDashboard className="icon-size icon-color"  />
          </div>
         <span className="icon-text-center"> Dashboard </span>
        </li>

        
        <li className={`nav-item ${selectedItem === "Courses" ? "selected" : ""}`}
          onClick={() => handleItemClick("Courses")}>
          <div className="icon">
            <TbBook2 className="icon-size icon-color"  />
          </div>
         <span className="icon-text-center"> Courses </span>
        </li>

        <li className={`nav-item ${selectedItem === "Groups" ? "selected" : ""}`}
          onClick={() => handleItemClick("Groups")}>
          <div className="icon">
            <RiGroupLine className="icon-size icon-color"  />
          </div>
         <span className="icon-text-center"> Groups </span>
        </li>

        <li className={`nav-item ${selectedItem === "Calender" ? "selected" : ""}`}
          onClick={() => handleItemClick("Calender")}>
          <div className="icon">
            <FaRegCalendarAlt className="icon-size icon-color"  />
          </div>
         <span className="icon-text-center"> Calender </span>
        </li>

        <li className={`nav-item ${selectedItem === "Inbox" ? "selected" : ""}`}
          onClick={() => handleItemClick("Inbox")}>
          <div className="icon">
            <AiOutlineInbox className="icon-size icon-color"  />
          </div>
         <span className="icon-text-center"> Inbox </span>
        </li>

        <li className={`nav-item ${selectedItem === "History" ? "selected" : ""}`}
          onClick={() => handleItemClick("History")}>
          <div className="icon">
            <AiOutlineHistory className="icon-size icon-color"  />
          </div>
         <span className="icon-text-center"> History </span>
        </li>

        <li className={`nav-item ${selectedItem === "Help" ? "selected" : ""}`}
          onClick={() => handleItemClick("Help")}>
          <div className="icon">
            <TbHelp className="icon-size icon-color"  />
          </div>
         <span className="icon-text-center"> Help </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
