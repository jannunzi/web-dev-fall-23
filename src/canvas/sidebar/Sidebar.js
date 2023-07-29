import React from 'react';
import './SideNav.css'; // Import the CSS file for styling

const Sidebar = () => {
  return (
    // <div className="sidenav">
    //   <div className="logo">
    //     {/* Insert your logo here */}
    //     <img src="logo.png" alt="Logo" />
    //   </div>
    //   <div className="profile">
    //     {/* Insert profile picture and account options here */}
    //     <img src="profile-pic.png" alt="Profile Picture" />
    //     <div className="account-options">
    //       {/* Account options (e.g., user name, settings, sign out, etc.) */}
    //       <p>User Name</p>
    //       <a href="#">Settings</a>
    //       <a href="#">Sign Out</a>
    //     </div>
    //   </div>
    //   <ul className="nav-links">
    //     {/* Navigation links */}
    //     <li><a href="#">Dashboard</a></li>
    //     <li><a href="#">Courses</a></li>
    //     <li><a href="#">Groups</a></li>
    //     {/* Add more navigation links as needed */}
    //   </ul>
    // </div>

    <div className="side-nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        {/* Add more navigation items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
