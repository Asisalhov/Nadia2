import React from "react";
import {
  Table,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button
} from "reactstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
function TableCard() {
  return (
    <div className="table_card">
      <div className="d-flex">
        <CardSearch />
        <Button className="table-card-button">New Client</Button>
      </div>
      <Table borderless className="table_card_table">
        <thead>
          <tr>
            <th>name</th>
            <th>number</th>
            <th>contact name</th>
            <th>active projects</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <CardPagination />
      </div>
    </div>
  );
}

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
const CardSearch = () => {
  return (
    <InputGroup className="table_card_search ">
      <InputGroupAddon className="d-flex align-items-center">
        <InputGroupText>
          <FaSearch />
        </InputGroupText>
      </InputGroupAddon>
      <Input type="text" placeholder="Search client" />
    </InputGroup>
  );
};
export default TableCard;
