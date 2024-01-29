import React from "react";
import { IoMdAddCircle } from "react-icons/io";

const ButtonTambah = ({ setShowModal, setFormData, setTextModal }) => {
  return (
    <button
      className="flex items-center gap-1 rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700"
      onClick={() => {
        setShowModal(true);
        setFormData({});
        setTextModal("Tambah");
      }}
    >
      <IoMdAddCircle size={20} /> Tambah
    </button>
  );
};

export default ButtonTambah;
