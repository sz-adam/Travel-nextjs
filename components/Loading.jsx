import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen ">
      <div className="relative flex-col justify-center items-center py">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200 "></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
      </div>
      <div className="animate-pulse text-4xl font-bold px-2">Loading...</div>
    </div>
  );
};

export default Loading;
