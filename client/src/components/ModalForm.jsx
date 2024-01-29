import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const ModalForm = ({
  setShowModal,
  textModal,
  formData,
  setFormData,
  handleSubmit,
}) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const buttonIcon =
    textModal === "Tambah" ? <IoMdAdd size={20} /> : <FaEdit size={20} />;

  return (
    <div className="absolute left-0 top-0 h-screen w-screen bg-black bg-opacity-40">
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-md bg-white md:max-w-md">
        <h1 className="mb-3 border-b px-5 py-4 text-lg font-semibold lg:text-xl">
          {textModal} Data
        </h1>

        <form className="px-5" onSubmit={handleSubmit}>
          <div className="md:flex md:gap-4">
            <div className="mb-3">
              <label htmlFor="nim">NIM</label>
              <input
                id="nim"
                type="text"
                className="w-full rounded-md border border-gray-500 p-2 text-sm"
                placeholder="Misal: 201943501760"
                value={formData.nim}
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age">Umur</label>
              <input
                id="age"
                type="number"
                min={0}
                className="w-full rounded-md border border-gray-500 p-2 text-sm"
                placeholder="Masukan umur"
                value={formData.age}
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="name">Nama</label>
            <input
              id="name"
              type="text"
              className="w-full rounded-md border border-gray-500 p-2 text-sm"
              placeholder="Masukan nama lengkap"
              value={formData.name}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="major">Jurusan</label>
            <input
              id="major"
              type="text"
              className="w-full rounded-md border border-gray-500 p-2 text-sm"
              placeholder="Misal: Teknik Informatika"
              value={formData.major}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4 flex gap-2">
            <button className="flex gap-1 rounded-md bg-green-600 px-3 py-1.5 text-sm text-white hover:bg-green-700">
              {buttonIcon} {textModal}
            </button>
            <button
              className="flex gap-1 rounded-md bg-gray-500 px-3 py-1.5 text-sm text-white hover:bg-gray-600"
              onClick={() => setShowModal(false)}
            >
              <MdCancel size={20} /> Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
