import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white">
      <div className="w-12 h-12 border-4 border-white border-t-slate-900 rounded-full animate-spin"></div>
      <p className="mt-4 text-xl text-zinc-800">Loading...</p>
    </div>
  );
};

export default Loader;
