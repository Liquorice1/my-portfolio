
import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="content">
        <h1>Contact</h1>
        <p>Email: <a href="mailto:carrieannbennett2711@gmail.com">carrieannbennett2711@gmail.com</a></p>
        <p>Mobile: 0810340745</p>
      </div>
      <style jsx>{`
        h1,
        p,
        a {
          color: #333;
        }

        .content {
          background: #f9f9f9;
          padding: 10px;
        }
      `}</style>
    </Layout>
  );
};

export default Contact;


