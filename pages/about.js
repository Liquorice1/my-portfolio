import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="content">
        <h1>About</h1>
        <h2>Current Studies and Future Goals</h2>
        <p>
          I am currently studying full stack web development and aspire to build
          a career in that field. I am passionate about creating dynamic and
          interactive web applications and look forward to gaining more
          knowledge and experience in this domain.
        </p>
        <h2>Education</h2>
        <ul>
          <li>
            B Com Business Management, Da Vinci Institution of Technology
            Management
          </li>
        </ul>
        <h2>Certificates</h2>
        <ul>
          <li>Basic Booking, Damelin</li>
          <li>Practical Bookkeeping, Damelin</li>
        </ul>
      </div>
      <style jsx>{`
        h1,
        h2,
        p {
          color: #333;
        }

        .content {
          background: #f9f9f9;
          padding: 10px;
        }

        ul {
          list-style-type: disc;
          padding-left: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default About;
