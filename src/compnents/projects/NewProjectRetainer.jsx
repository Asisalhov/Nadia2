import React from "react";
import TableCard from "../layout/TableCard";
import {
  Form,
  FormGroup,
  Input,
  Col,
  Label,
  FormText,
  Button
} from "reactstrap";
function NewProjectRetainer() {
  return (
    <TableCard>
      <h5>Retainer</h5>
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
          <Label for="project_name" sm={2}>
            Monthly fee
          </Label>
          <Col sm={4}>
            <Input
              type="text"
              name="amount_due"
              id="amount_due"
              placeholder="Project name"
            />
          </Col>
          <Label for="project_name" sm={2}>
            Start & End Dates
          </Label>
          <Col sm={2}>
            <Input
              type="date"
              name="start_date"
              id="start_date"
              placeholder="Start -DD/MM/YYYY"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="date"
              name="end_date"
              id="end_date"
              placeholder="Start -DD/MM/YYYY"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="project_name" sm={2}>
            PO
          </Label>
          <Col sm={2}>
            <Input type="text" name="number" id="number" placeholder="Number" />
            <FormText>From Client</FormText>
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="amount_due"
              id="amount_due"
              placeholder="Amount due"
            />
            <FormText>Amount due in exsisting PO</FormText>
          </Col>
          <Label for="project_name" sm={2}>
            Down-payment fee
          </Label>
          <Col sm={2}>
            <Input
              type="text"
              name="down_payment_fee"
              id="down_payment_fee"
              placeholder="Amount due"
            />
            <FormText>From Contact/PO</FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="project_name" sm={2}>
            Max Monthly Hours
          </Label>
          <Col sm={2}>
            <Input
              type="text"
              name="project_name"
              id="project_name"
              placeholder="Hour amount"
            />
          </Col>
        </FormGroup>
        <div className="d-flex w-100 justify-content-end ">
          <div className="py-2">
            <Button
              style={{
                width: "70px"
              }}
              className="table-card-button mr-3"
            >
              Back
            </Button>
            <Button
              style={{
                width: "70px"
              }}
              className="table-card-button "
            >
              Save
            </Button>
          </div>
        </div>
      </Form>
    </TableCard>
  );
}

export default NewProjectRetainer;
