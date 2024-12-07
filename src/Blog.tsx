import React from "react";
import "./styles/blog.css"

// Reusable BlogPost component
const BlogPost = ({ imgSrc, imgAlt, category, date, title, description, link }) => (
  <li className="blog-post-item">
    <a target="blank" href={`${link}`}>
      <figure className="blog-banner-box">
        <img src={imgSrc} alt={imgAlt} loading="lazy" />
      </figure>
      <div className="blog-content">
        <div className="blog-meta">
          <p className="blog-category">{category}</p>
          <span className="dot"></span>
          <time dateTime={date}>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
        </div>
        <h3 className="h3 blog-item-title">{title}</h3>
        <p className="blog-text">{description}</p>
      </div>
    </a>
  </li>
);

// Blog Component containing multiple posts
const Blog = () => {
  const blogPosts = [
    {
      imgSrc: "./CRONjobs.jpg",
      imgAlt: "CRON Jobs on Nodejs",
      category: "NodeJS",
      date: "2024-05-26",
      title: "Scheduling Tasks with CRON Jobs in Node.js",
      description: "A short understading on Cron jobs and its setup in nodejs",
      link:"https://medium.com/@surajAherrao/scheduling-tasks-with-cron-jobs-in-node-js-85680383a659"
    },
    {
      imgSrc: "./rsa-blog.png",
      imgAlt: "RSA",
      category: "Cryptography",
      date: "2024-12-05",
      title: "Easy Step by Step Guide to RSA Encryption in React.js and Decryption in Node.js",
      description: "Stepwise guide on cryptograpy in javascript",
      link:"https://medium.com/@surajAherrao/easy-step-by-step-guide-to-rsa-encryption-in-react-js-and-decryption-in-node-js-29a600a7fc02"
    },
  ];

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
