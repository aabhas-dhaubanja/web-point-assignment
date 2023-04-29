import React from "react";
import Search from "@/icons/Search";
import { debounce } from "lodash-es";

type Props = {
  handleSearchQuery: Function;
};

const SearchBar = ({ handleSearchQuery }: Props) => {
  const _handleSearchQuery = debounce(
    (e) => handleSearchQuery(e.target.value),
    300
  );
  return (
    <div className="bg-slate-100 px-4 rounded-full flex justify-between items-center">
      <input
        onChange={_handleSearchQuery}
        className="border-none outline-none bg-transparent h-12 max-w-96"
        placeholder="Search ..."
        type="text"
        name="search"
      />
      <div className="ml-8">
        <Search height="16px" />
      </div>
    </div>
  );
};

export default SearchBar;
