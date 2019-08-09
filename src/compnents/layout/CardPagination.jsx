import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CardPagination = () => {
  return (
    <Pagination>
      <PaginationItem disabled>
        <PaginationLink href="#">
          <FaChevronLeft />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">5</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <FaChevronRight />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default CardPagination;
