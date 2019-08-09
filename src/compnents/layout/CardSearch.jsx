import React from "react";
import { ReactComponent as SearchIcon } from "../../Icons/search.svg";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
const CardSearch = () => {
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
      <Input type="text" placeholder="Search client" />
    </InputGroup>
  );
};

export default CardSearch;
