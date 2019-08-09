import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { FaUserCircle } from "react-icons/fa";
import sectionsList from "../../sectionsList";

function Header() {
  const [newDropDown, setNewDropDown] = useState(false);
  const [profilDropDown, setProfilDropDown] = useState(false);
  return (
    <div className="header shadow-sm border-bottom d-flex justify-content-end">
      <Dropdown
        isOpen={newDropDown}
        toggle={() => setNewDropDown(!newDropDown)}
      >
        <DropdownToggle className="mx-2 px-4 header_btn">New</DropdownToggle>
        <DropdownMenu className="header_new_dropdown">
          {sectionsList
            .filter(section => section.new)
            .map((section, i) => (
              <DropdownItem key={i} className="header_new_dropdown_item">
                <section.Icon /> {section.text}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
      <div className="d-flex align-items-center border-left px-3 mx-3">
        <Dropdown
          isOpen={profilDropDown}
          toggle={() => setProfilDropDown(!profilDropDown)}
        >
          <DropdownToggle tag="span" caret>
            Jhon smith
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <h2 className="d-flex align-items-center ">
        <FaUserCircle />
      </h2>
    </div>
  );
}

export default Header;
