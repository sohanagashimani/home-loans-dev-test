import React from "react";

export default function Pagination({ currentPage, pageCount, onPageChange }) {
  const pages = [...Array(pageCount).keys()].map((i) => i + 1);

  function handleClick(page) {
    if (page !== currentPage) {
      onPageChange(page);
    }
  }

  return (
    <div className="mt-10 flex gap-4 items-center justify-center">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          disabled={page === currentPage}
          className={`px-3 py-1 text-sm font-medium ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } rounded-md`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
