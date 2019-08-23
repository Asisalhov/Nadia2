import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getClients } from "../../actions/clientsActions";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";

import TableCard from "../layout/TableCard";

import { FormGroup, FormText, Input, Col, Label, Button } from "reactstrap";

function NewProjectTM() {
  return (
    <div>
      <Form>
        <TableCard>
          <h5>Time & Material - monthly</h5>
          <FormGroup row>
            <Label for="Rates" sm={2}>
              Rates (ILS)
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="product_designer_rate"
                id="product_designer_rate"
                placeholder="Product designer"
                tag={Field}
              />
              <FormText>Hourly rates</FormText>
            </Col>
            <Col sm={2}>
              <Input
                type="text"
                tag={Field}
                name="mec_designer_rate"
                id="mec_designer_rate"
                placeholder="Mechanical Designer"
              />
            </Col>
            <Col sm={2}>
              <Input
                type="text"
                tag={Field}
                name="digital_designer_rate"
                id="digital_designer_rate"
                placeholder="Digital designer"
              />
            </Col>
            <Col sm={2}>
              <Input
                type="text"
                tag={Field}
                name="vp_rate"
                id="vp_rate"
                placeholder="VP"
              />
            </Col>
            <Col sm={2}>
              <Input
                tag={Field}
                type="text"
                name="partner_rate"
                id="partner_rate"
                placeholder="Partner"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Project management fee</Label>
            <Col sm={5}>
              <Input
                type="text"
                tag={Field}
                name="monthly_fee"
                id="monthly_fee"
                placeholder="Amount due P/Month "
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>PO</Label>
            <Col sm={2}>
              <Input
                type="text"
                tag={Field}
                name="po_number"
                id="po_number"
                placeholder="Number"
              />
              <FormText>From Client</FormText>
            </Col>
            <Col sm={2}>
              <Input
                type="text"
                tag={Field}
                name="po_hours"
                id="po_hours"
                placeholder="Hours"
              />
              <FormText>Hours in existing PO</FormText>
            </Col>
            <Label sm={2}>Down-payment fee</Label>
            <Col sm={2}>
              <Input
                type="text"
                tag={Field}
                name="down_payment_fee"
                id="down_payment_fee"
                placeholder="amount due"
              />
              <FormText>Form Contract/po</FormText>
            </Col>
          </FormGroup>
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
      </Form>
    </div>
  );
}

const CompWithFormik = withFormik({
  mapPropsToValues: () => ({
    product_designer_rate: "",
    mec_designer_rate: "",
    digital_designer_rate: "",
    vp_rate: "",
    partner_rate: "",
    monthly_fee: "",
    po_number: "",
    po_hours: "",
    down_payment_fee: ""
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values);
    // props.setBuissModle(values.business_modle);
    // props.setBuissModle(values.business_modle);
    // props.setData(...props.data, ...values);
    // props.setStep(2);
    // setSubmitting(false);
  },
  validationSchema: Yup.object().shape({})
})(NewProjectTM);
const mapStateToProps = state => ({ clients: state.clients.clients });
export default connect(
  mapStateToProps,
  { getClients }
)(CompWithFormik);
