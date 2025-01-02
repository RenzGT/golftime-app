import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const visiblePages = 4;
  let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
  let endPage = Math.min(totalPages, startPage + visiblePages - 1);

  if (endPage === totalPages && startPage > 1) {
    startPage = Math.max(1, endPage - visiblePages + 1);
  }

  if (startPage === 1 && endPage < totalPages) {
    endPage = Math.min(totalPages, startPage + visiblePages - 1);
  }

  return (
    <div className="flex flex-wrap w-full justify-center content-center my-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          {Array.from({ length: endPage - startPage + 1 }).map((_, index) => (
            <PaginationItem key={startPage + index}>
              <PaginationLink
                onClick={() => onPageChange(startPage + index)}
                className={currentPage === startPage + index ? "font-bold bg-zinc-200" : ""}
              >
                {startPage + index}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
