import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";

const Alert = ({ showAlert, setShowAlert, status }) => {
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => setShowAlert(false), 5000);
    }
  }, [showAlert]);

  return (
    <>
      {showAlert && (
        <div className="mb-3 rounded-md bg-green-600 p-2 text-sm text-white transition duration-300 ease-in-out lg:text-base">
          <p className="flex items-center gap-2">
            <FaCheck size={16} /> Berhasil {status} data
          </p>
        </div>
      )}
    </>
  );
};

export default Alert;
