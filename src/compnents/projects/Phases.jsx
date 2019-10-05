import React from "react";
import { connect } from "react-redux";

import { FormGroup, Col, Input, Form } from "reactstrap";
function Phases({ phases, setPhases, users }) {
  const handlePhasesChange = (id, e) => {
    const newPhases = phases.map(phase =>
      phase.id === id ? { ...phase, [e.target.name]: e.target.value } : phase
    );
    setPhases(newPhases);
  };
  return (
    <Form>
      <h5>Phases</h5>
      {phases.map(({ id, name, owner, hours, due_Date }, i) => (
        <FormGroup row>
          <Col sm={2}>
            <Input
              type="number"
              step="1"
              min="1"
              onChange={e => handlePhasesChange(id, e)}
              value={i + 1}
              name="number"
              disabled
              placeholder="Number"
            />
          </Col>
          <Col sm={4}>
            <Input
              type="text"
              value={name}
              name="name"
              onChange={e => handlePhasesChange(id, e)}
              placeholder="Phase Name"
            />
          </Col>
          <Col sm={2}>
            <Input
              component="select"
              type="select"
              onChange={e => handlePhasesChange(id, e)}
              name="owner"
              value={owner}
              placeholder="Phase Owner"
            >
              {users.map(user => (
                <option value={user}>{user.name}</option>
              ))}
            </Input>
          </Col>
          <Col sm={2}>
            <Input
              value={hours}
              type="number"
              name="hours"
              step="0.5"
              onChange={e => handlePhasesChange(id, e)}
              min="1"
              placeholder="Hours (max)"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="date"
              value={due_Date}
              name="due_Date"
              onChange={e => handlePhasesChange(id, e)}
              placeholder="Due Date"
            />
          </Col>
        </FormGroup>
      ))}
    </Form>
  );
}
const mapStateToProps = state => ({
  users: state.users.team
});
export default connect(mapStateToProps)(Phases);
