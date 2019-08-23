import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getClients } from "../../actions/clientsActions";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import {
  Col,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  CustomInput
} from "reactstrap";
import TableCard from "../layout/TableCard";

function NewProjectBasic({
  data,
  setData,
  setBuissModle,
  clients,
  getClients,
  users,
  errors,
  touched,
  values,
  handleChange
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getClients();
      setLoading(false);
    };
    getData();
  }, [getClients]);

  if (loading) return null;
  return (
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
                  tag={Field}
                  type="text"
                  name="project_name"
                  placeholder="Project name"
                  invalid={errors.project_name && touched.project_name}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="client_id" sm={4}>
                Client
              </Label>
              <Col sm={8}>
                <Input
                  tag={Field}
                  component="select"
                  type="select"
                  name="client_id"
                  onChange={handleChange}
                >
                  {clients &&
                    clients.map(client => (
                      <option key={client.id} value={client.id}>
                        {client.contact_person}
                      </option>
                    ))}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="owner_id" sm={4}>
                Owner
              </Label>
              <Col sm={8}>
                <Input
                  tag={Field}
                  component="select"
                  type="select"
                  name="owner_id"
                  onChange={handleChange}
                >
                  {users && users.map(user => <option>{user.name}</option>)}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="currnecy" sm={4}>
                Currency
              </Label>
              <Col sm={8}>
                <Input
                  tag={Field}
                  component="select"
                  type="select"
                  name="currnecy"
                  onChange={handleChange}
                >
                  <option value="ILS">ILS</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="RMB">RMB</option>
                </Input>
                <FormText color="muted">ILS,USD,EUR,GBP,RMB</FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="commission" sm={4}>
                Commissions
              </Label>
              <Col sm={4}>
                <Input
                  tag={Field}
                  type="text"
                  name="commission_local"
                  placeholder="local"
                />
              </Col>
              <Col sm={4}>
                <Field
                  component={Input}
                  type="text"
                  name="commission_import"
                  placeholder="import"
                />
              </Col>
              <FormText color="muted">
                Commission added to modeling and subcontractor work
              </FormText>
            </FormGroup>

            <FormGroup row>
              <Label for="Business_modle" sm={4}>
                Business modle
              </Label>
              <Col sm={8}>
                <Input
                  tag={Field}
                  onChange={handleChange}
                  component="select"
                  type="select"
                  name="business_modle"
                >
                  <option value="TM_monthly">Time & material - monthly</option>
                  <option value="TM_Milestone">
                    Time & material - milestone
                  </option>
                  <option value="fixed">Fixed</option>
                  <option value="retainer">Retainer</option>
                </Input>
              </Col>
            </FormGroup>
          </div>
          <div className="w-50">
            <FormGroup row>
              <Label for="attachment" sm={3}>
                Attachments
              </Label>
              <Col sm={9}>
                <CustomInput
                  tag={Field}
                  type="file"
                  className="pl-2"
                  name="attachment"
                  id="attachment"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="comments" sm={3}>
                Comments
              </Label>
              <Col sm={9}>
                <Input
                  tag={Field}
                  type="textarea"
                  component="textarea"
                  name="comments"
                  rows="7"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="material_subcon_billing" sm={3}>
                Material & SubCon Billing
              </Label>
              <Col sm={9} className="d-flex">
                <CustomInput
                  tag={Field}
                  type="checkbox"
                  className="align-self-center"
                  name="material_subcon_billing"
                  id="material_subcon_billing"
                  checked={values.material_subcon_billing}
                  value={values.material_subcon_billing}
                  onChange={handleChange}
                  inline
                />
              </Col>
            </FormGroup>
          </div>
        </div>
        <div className="d-flex w-100 justify-content-end ">
          <div className="py-2">
            <Button
              style={{
                width: "70px"
              }}
              tag={Link}
              to="/projects"
              className="table-card-button mr-3"
            >
              Cancel
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
    project_name: "test",
    client_id: "",
    owner_id: "",
    currnecy: "ILS",
    commission_local: "",
    commission_import: "",
    business_modle: "TM_monthly",
    attachment: "",
    comments: "",
    material_subcon_billing: true
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    props.setBuissModle(values.business_modle);
    props.setBuissModle(values.business_modle);
    props.setData({ ...props.data, ...values });
    props.setStep(2);
    setSubmitting(false);
  },
  validationSchema: Yup.object().shape({})
})(NewProjectBasic);
const mapStateToProps = state => ({ clients: state.clients.clients });
export default connect(
  mapStateToProps,
  { getClients }
)(CompWithFormik);
