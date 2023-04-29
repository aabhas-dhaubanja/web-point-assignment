import React from "react";
import { Sort } from "@/types/Sort";
import Left from "@/icons/Left";
import Right from "@/icons/Right";

type Props = {
  currentSort: Sort;
  toggleSort: Function;
};

const Toggle = ({ currentSort, toggleSort }: Props) => {
  return (
    <div className="flex items-center shadow-md rounded-full bg-white">
      <div onClick={() => toggleSort()} className="active:bg-slate-50 p-3">
        <Left width="24px" height="24px" />
      </div>
      <div className="p-3 select-none">{currentSort}</div>
      <div
        onClick={() => toggleSort()}
        dir="rtl"
        className="active:bg-slate-50 p-3"
      >
        <Right width="24px" height="24px" />
      </div>
    </div>
  );
};

export default Toggle;
