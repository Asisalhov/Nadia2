import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { addClient } from "../../actions/clientsActions";
import TableCard from "../layout/TableCard";
// reactstrap
import { Table, Input, CustomInput, Button } from "reactstrap";
// icons
import { ReactComponent as Done } from "../../Icons/done.svg";
import { ReactComponent as Edit } from "../../Icons/edit.svg";
import { ReactComponent as Close } from "../../Icons/close.svg";

function AddTeam() {
  const [loading, setLoading] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
    team: "",
    department: "",
    toggl: false,
    asana: false,
    greeInVoice: false
  });

  const onInputChange = e =>
    setNewMember({
      ...newMember,
      [e.target.name]: e.target.value
    });
  const onCheckboxChange = e =>
    setNewMember({
      ...newMember,
      [e.target.id]: e.target.checked
    });

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    addClient(newMember);
  };
  const {
    name,
    email,
    role,
    team,
    department,
    toggl,
    asana,
    greeInVoice
  } = newMember;
  return (
    <div>
      <h3>Settings - Team member</h3>
      <form onSubmit={onSubmit}>
        <TableCard>
          <div className="d-flex justify-content-between table_card_header">
            <div className="d-flex">
              <Button
                tag={Link}
                // to={`/clients/:id/edit`}
                size="lg"
                className="btn-circle table-card-button mr-2"
                disabled
              >
                <Edit />
              </Button>
              <Button
                size="lg"
                className="btn-circle table-card-button "
                type="submit"
              >
                <Done />
              </Button>
            </div>
            <div>
              <Link to="/settings/team">
                <Close />
              </Link>
            </div>
          </div>
          <fieldset disabled={loading}>
            <Table borderless className="table_card_table">
              <thead>
                <tr>
                  <th width="15%">name</th>
                  <th width="15%">e-mail</th>
                  <th width="20%">role</th>
                  <th width="20%">team</th>
                  <th width="20%">department </th>
                  <th className="text-center">toggle</th>
                  <th className="text-center">asana</th>
                  <th className="text-center">greeInVoice</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="15%">
                    <Input
                      onChange={onInputChange}
                      name="official_name"
                      value={name}
                      required
                    />
                  </td>
                  <td width="15%">
                    <Input
                      onChange={onInputChange}
                      name="number"
                      value={email}
                      required
                    />
                  </td>
                  <td>
                    <Input
                      onChange={onInputChange}
                      name="contact_person"
                      value={role}
                      type="select"
                      required
                    />
                  </td>
                  <td>
                    <Input
                      onChange={onInputChange}
                      name="phone_number"
                      type="select"
                      value={team}
                      required
                    />
                  </td>
                  <td>
                    <Input
                      onChange={onInputChange}
                      name="email"
                      type="select"
                      value={department}
                      required
                    />
                  </td>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="toggl"
                      defaultChecked={toggl}
                    />
                  </td>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="asana"
                      defaultChecked={asana}
                    />
                  </td>
                  <td className="text-center">
                    <CustomInput
                      type="checkbox"
                      id="greeninvoice"
                      defaultChecked={greeInVoice}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </fieldset>
        </TableCard>
      </form>
    </div>
  );
}

export default AddTeam;
