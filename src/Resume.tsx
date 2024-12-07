import React from "react";
import "./styles/resume.css"

const Resume = () => {
  const educationData = [
    {
      title: "B.E. Computer Engineering - Gandhinagar Institute of Technology",
      duration: "07/2019 - 05/2023,",
      description:
        "9.20 CGPA",
    },
    {
      title: "HSC - 12th - Ambe School CBSE",
      duration: "2019",
      description:
        "82%",
    },
  ];

  const experienceData = [
    {
      title: "SDE - MERN Developer - Knackroot TechnoLabs LLP",
      duration: "2023 — Present",
      description:
        ["Developed and maintained web applications using MERN expertise, ensuring responsive design and optimal user experience with utilizing database management systems performing complex queries and maintaining data integrity.",
          "Successfully managed websites and app that accommodates over 100,000 users, ensuring high performance, security, and availability.",
          "Worked with Blockchain using Etherjs and Webjs to build robust and scalable Defi & Web3 Websites and App",
          "Worked on 4+ projects crafted efficient and maintainable code. Went Through 20+ Short Sprints and 4+ develpoments"],
    },
    {
      title: "Intern - MERN Developer - Knackroot TechnoLabs LLP",
      duration: "2023",
      description:
        ["Developed and Learned Implementation using MERN Stack, ensuring Clean and Proper code.",
          "Worked on App with use of Reactjs, React Native, NodeJS And Postgress",
          "Gained Knowledge on Git, Redux, RDBMS, etc.",
          "Acquired Efficiency in Blockchain with Web3-Defi Framworks and Libraries",
          "Participated and worked on Inhouse projects to Gain Knowledge and Grasp implementation for various techstacks."
        ],
    },
  ];

  const skillsData = [
    { title: "Full Stack Development", level: "80" },
    { title: "Front End Development", level: "90" },
    { title: "Back-End Development", level: "70" },
    { title: "Web Designing", level: "50" },
  ];

  return (
    <article className="resume active " data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Experience Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experienceData.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.duration}</span>
              {
                item?.description.map(x =>
                  <p className="timeline-text" style={{ marginBottom: "10px" }}>{x}</p>
                )
              }
            </li>
          ))}
        </ol>
      </section>

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {educationData.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.duration}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>



      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skillsData.map((skill, index) => (
            <li className="skills-item" key={index}>
              <div className="title-wrapper">
                <h5 className="h5">{skill.title}</h5>
                <data value={skill.level}>{skill.level}%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
