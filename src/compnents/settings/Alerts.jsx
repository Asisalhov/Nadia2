import React from "react";
import { Link } from "react-router-dom";
import TableCard from "../layout/TableCard";
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

// icons

import { ReactComponent as Close } from "../../Icons/close.svg";

function Alerts() {
  return (
    <div>
      <h3>Settings - Alerts</h3>
      <TableCard>
        <div className="d-flex justify-content-end table_card_header mb-3">
          <div>
            <Link to="/settings/">
              <Close />
            </Link>
          </div>
        </div>
        <Form>
          <FormGroup row>
            <Label sm={2}>hour overdue:</Label>
            <Col sm={8}>
              <div className="d-flex my-2">
                <Square color="#EFDC2D" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="85% - 100% utilization"
                />
              </div>
              <div className="d-flex my-2">
                <Square color="#FF6565" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="more than 100% utilization"
                />
              </div>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Time overdue:</Label>
            <Col sm={8}>
              <div className="d-flex my-2">
                <Square color="#EFDC2D" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="5 - 0 days before deadline"
                />
              </div>
              <div className="d-flex my-2">
                <Square color="#FF6565" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="0 days past deadline"
                />
              </div>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Payment overdue:</Label>
            <Col sm={8}>
              <div className="d-flex my-2">
                <Square color="#EFDC2D" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="up to 15 days delay"
                />
              </div>
              <div className="d-flex my-2">
                <Square color="#FF6565" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="more than 15 delay"
                />
              </div>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Utilization:</Label>
            <Col sm={8}>
              <div className="d-flex my-2">
                <Square color="#EFDC2D" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="Less than 70% monthly"
                />
              </div>
              <div className="d-flex my-2">
                <Square color="#FF6565" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="Less than 60% monthly"
                />
              </div>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Cash flow:</Label>
            <Col sm={8}>
              <div className="d-flex my-2">
                <Square color="#EFDC2D" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="Less than 600,000 NIS"
                />
              </div>
              <div className="d-flex my-2">
                <Square color="#FF6565" />
                <Input
                  style={{
                    height: "40px"
                  }}
                  placeholder="Less than 550,000  NIS"
                />
              </div>
            </Col>
          </FormGroup>
        </Form>
      </TableCard>
    </div>
  );
}
const Square = ({ color = "red" }) => {
  return (
    <div
      className="rounded border mr-2"
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: color
      }}
    />
  );
};
export default Alerts;
