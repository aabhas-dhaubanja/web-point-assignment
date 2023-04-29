import Left from "@/icons/Left";
import Right from "@/icons/Right";
import React from "react";

type Props = {
  currentPage: number;
  handlePageChange: Function;
  pageCount: number;
};

const Pagination = ({ pageCount, currentPage, handlePageChange }: Props) => {
  return (
    <div className="flex items-center shadow-md rounded-full bg-white">
      <div
        onClick={() => handlePageChange(currentPage - 1)}
        className="active:bg-slate-50 p-3"
      >
        <Left
          width="24px"
          height="24px"
          fill={currentPage === 0 ? "lightgray" : "black"}
        />
      </div>
      <div className="p-3 select-none">{currentPage + 1}</div>
      <div
        onClick={() => handlePageChange(currentPage + 1)}
        dir="rtl"
        className="active:bg-slate-50 p-3"
      >
        <Right
          width="24px"
          height="24px"
          fill={currentPage === pageCount - 1 ? "lightgray" : "black"}
        />
      </div>
    </div>
  );
};

export default Pagination;
