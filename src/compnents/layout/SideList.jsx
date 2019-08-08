import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
function SideList({ sectionsList }) {
  return (
    <ListGroup className="sidemenu_list">
      {sectionsList.map(section => (
        <ListGroupItem
          className={`sidemenu_list_item ${
            section.text === "Clients" ? "active" : ""
          }`}
        >
          <section.Icon /> <div>{section.text}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}

export default SideList;
