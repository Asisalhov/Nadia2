import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput
} from "reactstrap";
import TableCard from "../layout/TableCard";

function NewProject() {
  return (
    <div>
      <h3>New Project</h3>
      <TableCard className="w-100">
        <Form>
          <div className="d-flex new_project">
            <div className="w-50">
              <FormGroup row>
                <Label for="project_name" sm={4}>
                  Project name
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="project_name"
                    id="project_name"
                    placeholder="Project name"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label for="client" sm={4}>
                  Client
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="client"
                    id="client"
                    placeholder="client"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="owner" sm={4}>
                  Owner
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="owner"
                    id="owner"
                    placeholder="owner"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="currnecy" sm={4}>
                  Currency
                </Label>
                <Col sm={8}>
                  <Input
                    type="text"
                    name="currnecy"
                    id="currnecy"
                    placeholder="ILS"
                  />
                  <FormText color="muted">ILS,USD,EUR,GBP,RMB</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="currnecy" sm={4}>
                  Commissions
                </Label>
                <Col sm={4}>
                  <Input
                    type="text"
                    name="currnecy"
                    id="currnecy"
                    placeholder="ILS"
                  />
                </Col>
                <Col sm={4}>
                  <Input
                    type="text"
                    name="currnecy"
                    id="currnecy"
                    placeholder="ILS"
                  />
                </Col>
                <FormText color="muted">
                  Commission added to modeling and subcontractor work
                </FormText>
              </FormGroup>

              <FormGroup row>
                <Label for="exampleSelect" sm={4}>
                  Business modle
                </Label>
                <Col sm={8}>
                  <Input type="select" name="select" id="exampleSelect" />
                </Col>
              </FormGroup>
            </div>
            <div className="w-50">
              <FormGroup row>
                <Label for="exampleFile" sm={3}>
                  Attachments
                </Label>
                <Col sm={9}>
                  <Input type="file" name="file" id="exampleFile" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile" sm={3}>
                  Comments
                </Label>
                <Col sm={9}>
                  <Input type="textarea" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleFile" sm={3}>
                  Material & SubCon Billing
                </Label>
                <Col sm={9} className="d-flex">
                  <CustomInput
                    type="checkbox"
                    className="align-self-center"
                    id="exampleCustomInline2"
                    inline
                  />
                </Col>
              </FormGroup>
            </div>
          </div>
        </Form>
      </TableCard>
    </div>
  );
}

export default NewProject;
