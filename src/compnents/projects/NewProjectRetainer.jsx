import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getClients } from "../../actions/clientsActions";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";

import TableCard from "../layout/TableCard";
import { FormGroup, Input, Col, Label, FormText, Button } from "reactstrap";
function NewProjectRetainer() {
  return (
    <TableCard>
      <h5>Retainer</h5>
      <Form>
        <FormGroup row>
          <Label for="rates" sm={2}>
            Rates
          </Label>
          <Col sm={2}>
            <Input
              type="text"
              tag={Field}
              name="product_designer_rate"
              placeholder="Product designer"
            />
            <FormText>Hourly rates</FormText>
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              tag={Field}
              name="mec_designer_rate"
              id="mec_designer"
              placeholder="Mechanical Designer"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              tag={Field}
              name="digital_designer_rate"
              id="digital_designer"
              placeholder="Digital designer"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              tag={Field}
              name="vp_rate"
              id="vp"
              placeholder="VP"
            />
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="partner_rate"
              id="partner"
              tag={Field}
              placeholder="Partner"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="Monthly fee" sm={2}>
            Monthly fee
          </Label>
          <Col sm={4}>
            <Input
              type="text"
              tag={Field}
              name="monthly_fee"
              id="monthly_fee"
              placeholder="Amount due"
            />
          </Col>
          <Label for="project_name" sm={2}>
            Start & End Dates
          </Label>
          <Col sm={2}>
            <Input
              type="date"
              tag={Field}
              name="start_date"
              id="start_date"
              placeholder="Start -DD/MM/YYYY"
            />
            <FormText>Start</FormText>
          </Col>
          <Col sm={2}>
            <Input
              type="date"
              tag={Field}
              name="end_date"
              id="end_date"
              placeholder="End -DD/MM/YYYY"
            />
            <FormText>End</FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="po" sm={2}>
            PO
          </Label>
          <Col sm={2}>
            <Input
              type="text"
              name="po_number"
              id="po_number"
              tag={Field}
              placeholder="Number"
            />
            <FormText>From Client</FormText>
          </Col>
          <Col sm={2}>
            <Input
              type="text"
              name="po_amount"
              id="po_amount"
              tag={Field}
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
              tag={Field}
              id="down_payment_fee"
              placeholder="Amount due"
            />
            <FormText>From Contact/PO</FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="Max Monthly Hours" sm={2}>
            Max Monthly Hours
          </Label>
          <Col sm={2}>
            <Input
              type="text"
              tag={Field}
              name="max_monthly_hours"
              id="max_monthly_hours"
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
              type="button"
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

const CompWithFormik = withFormik({
  mapPropsToValues: () => ({
    product_designer_rate: "",
    mec_designer_rate: "",
    digital_designer_rate: "",
    vp_rate: "",
    partner_rate: "",
    monthly_fee: "",
    start_date: "",
    end_date: "",
    po_number: "",
    po_amount: "",
    down_payment_fee: "",
    max_monthly_hours: ""
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
})(NewProjectRetainer);
const mapStateToProps = state => ({ clients: state.clients.clients });
export default connect(
  mapStateToProps,
  { getClients }
)(CompWithFormik);
