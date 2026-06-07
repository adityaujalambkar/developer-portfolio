import React from "react";

const Link = ({ name, href }) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
    >
      {name}
    </a>
  );
};

export default Link;