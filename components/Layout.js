import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <nav>
          <Link href="/">
            <button>Home</button>
          </Link>
          <Link href="/about">
            <button>About</button>
          </Link>
          <Link href="/projects">
            <button>Projects</button>
          </Link>
          <Link href="/contact">
            <button>Contact</button>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        &copy; 2023 Carrie-Ann. All rights reserved.
      </footer>

      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          margin: 0;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #f5f5f5;
          color: #333;
        }

        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }

        header {
          background-color: #333;
          padding: 20px 0;
        }

        nav {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
        }

        button {
          background-color: transparent;
          border: none;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          padding: 10px;
          cursor: pointer;
          margin: 0 10px;
          transition: all 0.3s ease;
        }

        button:hover {
          color: #ff6f61;
        }

        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
          margin-top: 20px;
          width: 100%;
          max-width: 800px;
        }

        img {
          max-width: 150px;
          height: auto;
          border-radius: 50%;
          margin-bottom: 20px;
        }

        footer {
          margin-top: 20px;
          text-align: center;
          color: #777;
        }
      `}</style>
    </div>
  );
};

export default Layout;
