import "./styles/nav.css"
import React from "react";

const Navbar = ({select̥edSection,setSelectedSection}) => {
    const navItems = [
        { label: "About", isActive: true },
        { label: "Resume" },
        { label: "Blog" },
        { label: "Contact" },
    ];

    return (
        < nav className = "navbar" >
            <ul className="navbar-list">
                {navItems.map((item, index) => (
                    <li key={index} className="navbar-item">
                        <button
                        onClick={()=>{setSelectedSection(item.label)}}
                            className={`navbar-link ${item.label === select̥edSection ? "active" : ""}`}
                            data-nav-link
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>
      </nav >

  );
};

export default Navbar;
