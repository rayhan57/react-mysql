import React from "react";

const Greetings = ({ user }) => {
  return (
    <div>
      <h2 className="mb-4 text-lg lg:mb-8">
        Hi, <span className="font-semibold">{user.username}</span>
      </h2>
    </div>
  );
};

export default Greetings;
