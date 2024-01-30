import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../state/paginationSlice";

const TablePagination = () => {
  const dispatch = useDispatch();
  const { currentPage, currentData, totalPage } = useSelector(
    (state) => state.pagination,
  );

  const handlePrev = () => dispatch(setCurrentPage(currentPage - 1));
  const handleNext = () => dispatch(setCurrentPage(currentPage + 1));

  return (
    <div className="mt-5 flex items-center justify-between text-sm">
      <div>
        <p>
          Menampilkan{" "}
          <span className="font-semibold">
            {currentPage} - {currentData.length}
          </span>{" "}
          dari <span className="font-semibold">{totalPage}</span>
        </p>
      </div>

      <div className="flex divide-x-2">
        <button
          className="flex items-center rounded-s-md bg-gray-100 px-2 py-1 shadow hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 disabled:hover:bg-gray-50"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <GrFormPrevious /> Prev
        </button>
        <button
          className="flex items-center rounded-e-md bg-gray-100 px-2 py-1 shadow hover:bg-gray-200 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 disabled:hover:bg-gray-50"
          onClick={handleNext}
          disabled={currentPage === totalPage}
        >
          Next <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
