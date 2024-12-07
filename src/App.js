import { useState } from 'react';
import './styles/App.css';
import Navbar from './NavBar.tsx';
import Resume from './Resume.tsx';
import SidePanel from './SidePanel.tsx';
import About from './About.tsx';
import Blog from './Blog.tsx';
import Contact from './Contact.tsx';

function App() {

  const [select̥edSection, setSelectedSection] = useState("About")
  return (
    <>
      <div className='main'>
        <SidePanel />
        <div className="main-content">
          <Navbar select̥edSection={select̥edSection} setSelectedSection={setSelectedSection} />
          {
            (select̥edSection === "About") &&
            <About />
          }
          {
            (select̥edSection === "Resume") &&
            <Resume />
          }
          {
            (select̥edSection === "Blog") &&
            <Blog />
          }
          {
            (select̥edSection === "Contact") &&
            <Contact />
          }
        </div>
      </div>
    </>
  );
}

export default App;
