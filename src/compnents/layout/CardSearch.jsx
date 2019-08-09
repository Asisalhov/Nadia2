import React from "react";
import { FaSearch } from "react-icons/fa";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
const CardSearch = () => {
  return (
    <InputGroup className="table_card_search ">
      <InputGroupAddon
        addonType="prepend"
        className="d-flex align-items-center"
      >
        <InputGroupText>
          <FaSearch />
        </InputGroupText>
      </InputGroupAddon>
      <Input type="text" placeholder="Search client" />
    </InputGroup>
  );
};

export default CardSearch;
