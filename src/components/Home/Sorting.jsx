import React from "react";

const Sorting = ({ setSort }) => {
  return (
    <div className="flex items-center justify-end ">
      <select
        onChange={(e) => setSort(e.target.value)}
        className="my-7 p-2 cursor-pointer text-l font-bold"
      >
        <option selected disabled className="text-red-400" value="secin">
          Seçin
        </option>
        <option value="inc">Artan</option>
        <option value="dec">Azalan</option>
      </select>
    </div>
  );
};

export default Sorting;
