import React from "react";
import "./styles/about.css"

const About = () => {
  const services = [
    {
      icon: "./assets/images/icon-frontend.svg",
      title: "Front-End Development",
      description:
        "Expertise in crafting responsive and user-friendly interfaces using modern front-end technologies.",
    },
    {
      icon: "./assets/images/icon-backend.svg",
      title: "Back-End Development",
      description:
        "Robust and scalable server-side development tailored to your business needs.",
    },
    {
      icon: "./assets/images/icon-speaking.svg",
      title: "Public Speaking",
      description:
        "Delivering engaging and inspiring talks on a variety of topics to captivate audiences.",
    },
    {
      icon: "./assets/images/icon-travel.svg",
      title: "Traveller",
      description:
        "Exploring the world and sharing unique experiences through storytelling and photography.",
    },
  ];

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Enthusiast of Technology, Dreamer, Believer in Progress 🌟
        </p>
        <p>
          I'm a passionate technology enthusiast who is constantly working on turning dreams into reality. I firmly believe that progress is the driving force behind innovation, and I'm dedicated to being a part of that journey.
        </p>
        <p>
          🌐 Exploring New Horizons: I'm always on the lookout for new and exciting challenges. My thirst for knowledge drives me to explore uncharted territories, and I'm committed to pushing the boundaries of what's possible in the tech world.
        </p>
        <p>
          💻 Tech Stack: With a strong command of ReactJS, Node.js, and MongoDB, I have successfully built a diverse range of dynamic websites and applications. Whether it's crafting responsive user interfaces or developing robust back-end systems, I'm your go-to developer.
        </p>
        <p>
          🚀 Quick Learner: Learning is a lifelong journey, and I embrace it wholeheartedly. My ability to quickly adapt to new technologies and methodologies ensures that I stay at the cutting edge of the ever-evolving tech landscape.
        </p>
        <p>
          💡 Problem Solver: I thrive on challenges and take great pleasure in finding creative solutions to complex problems. Each problem is an opportunity to learn, grow, and innovate.
        </p>
        <p>

          If you're looking for a dedicated, innovative, and quick-learning developer who loves tackling challenges, let's connect! I'm always open to new opportunities, collaborations, and networking with like-minded professionals.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li className="service-item" key={index}>
              {/* <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div> */}
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
