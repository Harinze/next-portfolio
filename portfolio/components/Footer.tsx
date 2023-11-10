import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg">
          <span>© 2023 Async...</span>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/kingsleyibe/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v16M21 4v16M4 4l4.5 4.5M4 4l4.5 4.5M4 4l4.5 4.5M4 4l4.5 4.5"
              />
            </svg>
          </a>

          <a
            href="https://github.com/Harinze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-15a7 7 0 0 0-7 7c0 3.86 3.14 7 7 7s7-3.14 7-7a7 7 0 0 0-7-7zM9 16s-1.5-1-3-1M9 14s1.5-1 3-1m1 2h2"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
