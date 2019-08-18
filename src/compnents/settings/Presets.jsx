import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label, Col } from "reactstrap";
import TableCard from "../layout/TableCard";

// icons
import { ReactComponent as Done } from "../../Icons/done.svg";
import { ReactComponent as Edit } from "../../Icons/edit.svg";
import { ReactComponent as Close } from "../../Icons/close.svg";

function Presets() {
  return (
    <div>
      <h3>Prefets</h3>
      <TableCard>
        <div className="d-flex justify-content-between table_card_header mb-3">
          <div className="d-flex">
            <Button
              // tag={Link}
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
            <Link to="/settings/">
              <Close />
            </Link>
          </div>
        </div>
        <Form>
          <FormGroup row>
            <Label sm={2}>Departement</Label>
            <Col sm={8}>
              <Input placeholder="Design, Engineering, Digital, Management, " />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Teams</Label>
            <Col sm={8}>
              <Input placeholder="Team Boaz, Team Elad, Team Shir, Team Eitan, " />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>roles</Label>
            <Col sm={8}>
              <Input placeholder="Product designer, Mechanical designer, Digital designer, Manager, Admin, add more" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>commisioms</Label>
            <Label sm={1}>local</Label>
            <Col sm={1}>
              <Input placeholder="35%" />
            </Col>
            <Label sm={1}>import</Label>
            <Col sm={1}>
              <Input placeholder="100%" />
            </Col>
            <Label sm={4} className="text-right">
              Amount for 50% discount on commision
            </Label>
            <Col sm={2}>
              <Input placeholder="2,000 USD" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>prime hour cost</Label>
            <Col sm={3}>
              <Input placeholder="45$" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>employee monthly hours</Label>
            <Col sm={3}>
              <Input placeholder="182" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>week start on</Label>
            <Col sm={4}>
              <Input placeholder="Sunday" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Expense types</Label>
            <Col sm={8}>
              <Input placeholder="LIST WILL BE PROVIDED" />
            </Col>
          </FormGroup>
        </Form>
      </TableCard>
    </div>
  );
}

export default Presets;
