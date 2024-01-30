import React from "react";
import { MdEdit } from "react-icons/md";
import { IoMdRemoveCircle } from "react-icons/io";
import TablePagination from "./TablePagination";

const TableData = ({
  studentsData,
  setShowModal,
  setTextModal,
  setFormData,
  handleDelete,
}) => {
  const handleEdit = (item) => {
    setShowModal(true);
    setFormData(item);
  };

  return (
    <>
      <div className="relative mt-3 overflow-x-auto rounded-lg shadow-md">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-sm uppercase text-black">
            <tr>
              <th className="px-6 py-3">No</th>
              <th className="px-6 py-3">NIM</th>
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Umur</th>
              <th className="px-6 py-3">Jurusan</th>
              <th className="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {studentsData.map((item, index) => (
              <tr key={index} className="border-b odd:bg-white even:bg-gray-50">
                <th className="whitespace-nowrap px-6 py-3">{index + 1}</th>
                <td className="px-6 py-3">{item.nim}</td>
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.age}</td>
                <td className="px-6 py-3">{item.major}</td>
                <td className="flex gap-1 px-6 py-3">
                  <button
                    className="rounded-md bg-blue-500 p-1 text-white hover:bg-blue-600"
                    onClick={() => {
                      setTextModal("Ubah");
                      handleEdit(item);
                    }}
                  >
                    <MdEdit size={20} />
                  </button>
                  <button
                    className="rounded-md bg-red-500 p-1 text-white hover:bg-red-600"
                    onClick={() => handleDelete(item.nim, item.name)}
                  >
                    <IoMdRemoveCircle size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination />
    </>
  );
};

export default TableData;
