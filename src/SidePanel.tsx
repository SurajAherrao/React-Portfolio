import React, { useState } from 'react'
import "./sidePanel.css"


// A reusable component for contact items
const ContactItem = ({ iconName, title, children }) => (
  <li className="contact-item">
    <div className="icon-box">
      <ion-icon name={iconName}></ion-icon>
    </div>
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      {children}
    </div>
  </li>
);

// A reusable component for social links
const SocialLink = ({ iconName, href }) => (
  <li className="social-item">
    <a href={href} className="social-link">
      <ion-icon name={iconName}></ion-icon>
    </a>
  </li>
);

const SidePanel = ({
  avatarSrc = "./my-avatar.png",
  name = "Suraj Aherrao",
  title = "Full Stack Developer",
  email = "suraj582001@gmail.com",
  phone = "+91 7600286013",
  birthday = "08-05-2001",
  location = "Ahmedabad, Gujurat, India",
  socialLinks = [
    { iconName: "logo-facebook", href: "#" },
    { iconName: "logo-twitter", href: "#" },
    { iconName: "logo-instagram", href: "#" },
  ],
}) => {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleInfo = () => setIsExpanded(!isExpanded);
  return (
    <aside  className={`sidebar ${isExpanded ? 'active' : ''}`}  data-sidebar>
      {/* Sidebar Info */}
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatarSrc} alt={name} width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title={name}>{name}</h1>
          <p className="title">{title}</p>
        </div>
        <button className="info_more-btn" onClick={toggleInfo} data-sidebar-btn>
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      {/* Sidebar Additional Info */}
      <div className="sidebar-info_more">
        <div className="separator"></div>

        {/* Contacts List */}
        <ul className="contacts-list">
          <ContactItem iconName="mail-outline" title="Email">
            <a href={`mailto:${email}`} className="contact-link">{email}</a>
          </ContactItem>
          <ContactItem iconName="phone-portrait-outline" title="Phone">
            <a href={`tel:${phone}`} className="contact-link">{phone}</a>
          </ContactItem>
          <ContactItem iconName="calendar-outline" title="Birthday">
            <time dateTime={birthday}>{new Date(birthday).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
          </ContactItem>
          <ContactItem iconName="location-outline" title="Location">
            <address>{location}</address>
          </ContactItem>
        </ul>

        <div className="separator"></div>

        {/* Social Links */}
        <ul className="social-list">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidePanel;

