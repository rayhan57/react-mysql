import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../components/Alert";
import ButtonTambah from "../components/ButtonTambah";
import ModalForm from "../components/ModalForm";
import Search from "../components/Search";
import TableData from "../components/TableData/TableData";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../libs/fetchingApi";
import { setCurrentData, setTotalPage } from "../state/paginationSlice";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [textModal, setTextModal] = useState("");
  const [formData, setFormData] = useState({
    nim: "",
    name: "",
    age: "",
    major: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [statusAlert, setStatusAlert] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { currentPage, currentData } = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const fetchingData = async () => {
    const allStudents = await getAllStudents();
    setStudentsData(allStudents.data);

    const dataPerPage = 10;
    const startIndex = (currentPage - 1) * dataPerPage;
    const endIndex = startIndex + dataPerPage;
    dispatch(setTotalPage(Math.ceil(allStudents.data.length / dataPerPage)));
    dispatch(setCurrentData(allStudents.data.slice(startIndex, endIndex)));
  };

  const handleSuccess = () => {
    setShowModal(false);
    setStatusAlert(textModal === "Tambah" ? "menambah" : "mengubah");
    setShowAlert(true);
    fetchingData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (textModal === "Tambah") {
      await addStudent(formData, handleSuccess);
    } else {
      await updateStudent(formData, handleSuccess);
    }
  };

  const handleDelete = async (nim, name) => {
    const confirm = window.confirm(
      `Apakah anda yakin ingin menghapus data ${name}?`,
    );
    if (!confirm) return;
    await deleteStudent(nim, () => {
      setStatusAlert("menghapus");
      setShowAlert(true);
      fetchingData();
    });
  };

  const handleSearch = () => {
    const filteredStudents = studentsData.filter(
      (student) =>
        student.nim.includes(searchValue) ||
        student.name.toLowerCase().includes(searchValue),
    );
    setSearchResult(filteredStudents);
  };

  useEffect(() => {
    fetchingData();
    handleSearch();
  }, [searchValue, currentPage]);

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-5 text-center text-xl font-bold lg:mb-10 lg:text-2xl">
          Data Mahasiswa
        </h1>

        <Alert
          showAlert={showAlert}
          setShowAlert={setShowAlert}
          status={statusAlert}
        />

        <div className="flex items-center justify-between">
          <ButtonTambah
            setShowModal={setShowModal}
            setFormData={setFormData}
            setTextModal={setTextModal}
          />
          <Search setSearchValue={setSearchValue} />
        </div>

        <TableData
          studentsData={searchValue ? searchResult : currentData}
          setShowModal={setShowModal}
          setTextModal={setTextModal}
          formData={formData}
          setFormData={setFormData}
          handleDelete={handleDelete}
        />

        {showModal && (
          <ModalForm
            setShowModal={setShowModal}
            textModal={textModal}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
