import React from "react";
import TableCard from "../layout/TableCard";

import {
  Form,
  FormGroup,
  FormText,
  Input,
  Col,
  Label,
  Button,
  CustomInput
} from "reactstrap";

function NewProjectFixed() {
  return (
    <div>
      <TableCard>
        <h5>Fixed Rate</h5>
        <Form>
          <FormGroup row>
            <Label for="project_name" sm={2}>
              Rates
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="product_designer"
                id="product_designer"
                placeholder="Product designer"
              />
              <FormText>Hourly rates</FormText>
            </Col>
            <Col sm={2}>
              <Input
                type="text"
                name="mec_designer"
                id="mec_designer"
                placeholder="Mechanical Designer"
              />
            </Col>
            <Col sm={2}>
              <Input
                type="text"
                name="digital_designer"
                id="digital_designer"
                placeholder="Digital designer"
              />
            </Col>
            <Col sm={2}>
              <Input type="text" name="vp" id="vp" placeholder="VP" />
            </Col>
            <Col sm={2}>
              <Input
                type="text"
                name="partner"
                id="partner"
                placeholder="Partner"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Project management fee</Label>
            <Col sm={5}>
              <Input
                type="text"
                name="partner"
                id="partner"
                placeholder="Amount due p/month"
              />
            </Col>
            <Label sm={2}>Down-payment fee</Label>
            <Col sm={2}>
              <Input
                type="text"
                name="partner"
                id="partner"
                placeholder="amount due"
              />
              <FormText>Form Contract/po</FormText>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>PO</Label>
            <Col sm={2}>
              <Input
                type="text"
                name="partner"
                id="partner"
                placeholder="Number"
              />
              <FormText>From Client</FormText>
            </Col>
            <Col sm={2}>
              <Input
                type="text"
                name="partner"
                id="partner"
                placeholder="Amount due"
              />
              <FormText>Amount due in existing PO</FormText>
            </Col>
            <Label sm={2}>Material Billing</Label>

            <Col sm={2}>
              <CustomInput type="checkbox" inline />
              <Label>Monthly</Label>
            </Col>

            <Col sm={2}>
              <CustomInput type="checkbox" inline />
              <Label>p/phase</Label>
            </Col>
          </FormGroup>
        </Form>
      </TableCard>

      <TableCard>
        <h5>Phases</h5>
        <FormGroup row>
          <Col sm={2}>
            <Input type="text" placeholder="Number" />
          </Col>
          <Col sm={4}>
            <Input type="text" placeholder="Phase Name" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Phase Owner" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Hours (max)" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Due Date" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Input type="text" placeholder="Number" />
          </Col>
          <Col sm={4}>
            <Input type="text" placeholder="Phase Name" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Phase Owner" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Hours (max)" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Due Date" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Input type="text" placeholder="Number" />
          </Col>
          <Col sm={4}>
            <Input type="text" placeholder="Phase Name" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Phase Owner" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Hours (max)" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Due Date" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Input type="text" placeholder="Number" />
          </Col>
          <Col sm={4}>
            <Input type="text" placeholder="Phase Name" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Phase Owner" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Hours (max)" />
          </Col>
          <Col sm={2}>
            <Input type="text" placeholder="Due Date" />
          </Col>
        </FormGroup>
        <FormGroup>
          <div className="d-flex w-100 justify-content-between">
            <div className="py-2">
              <Button
                style={{
                  height: "35px"
                }}
                className="table-card-button ml-0"
              >
                Add Row
              </Button>
            </div>
            <div className="py-2">
              <Button
                style={{
                  width: "70px",
                  height: "35px"
                }}
                className="table-card-button mr-3"
              >
                Cancel
              </Button>
              <Button
                style={{
                  width: "70px",
                  height: "35px"
                }}
                className="table-card-button "
              >
                Save
              </Button>
            </div>
          </div>
        </FormGroup>
      </TableCard>
    </div>
  );
}

export default NewProjectFixed;
