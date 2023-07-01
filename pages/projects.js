import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const Projects = () => {
  return (
    <Layout>
      <h1>Projects</h1>
      <div className="project-block">
        <h2>Project 1</h2>
        <p>The project outcome is a full-stack web application called "Task 7" that manages car information. 
          It includes a back-end built with Express and a front-end built with React. The application uses MongoDB as the database to store car data in a collection called "cars." 
          Users can perform various operations such as adding a car, updating car information (for single or multiple cars), deleting a specific car, and viewing all car information. 
          Additionally, the application has a feature to list the details of cars older than 5 years, including their model, make, registration number, and current owner. 
          The project showcases your ability to create a fully functional web application, implement CRUD operations, and work with popular web development technologies.</p>
        <a href="https://github.com/Liquorice1" target="_blank" rel="noopener noreferrer">
          Visit GitHub
        </a>
      </div>
         </Layout>
  );
};

export default Projects;
