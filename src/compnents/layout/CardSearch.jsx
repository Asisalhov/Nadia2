import React from "react";
import { ReactComponent as SearchIcon } from "../../Icons/search.svg";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
const CardSearch = ({ title = "" }) => {
  return (
    <InputGroup className="table_card_search ">
      <InputGroupAddon
        addonType="prepend"
        className="d-flex align-items-center"
      >
        <InputGroupText>
          <SearchIcon />
        </InputGroupText>
      </InputGroupAddon>
      <Input type="text" placeholder={"Search " + title} />
    </InputGroup>
  );
};

export default CardSearch;
