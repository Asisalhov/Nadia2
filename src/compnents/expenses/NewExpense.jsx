import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getClients } from "../../actions/clientsActions";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";

// import { addExpense } from "../../actions/expensesActions";
import TableCard from "../layout/TableCard";
// reactstrap
import { Table, Input, CustomInput, Button } from "reactstrap";
// icons
import { ReactComponent as Done } from "../../Icons/done.svg";
import { ReactComponent as Edit } from "../../Icons/edit.svg";
import { ReactComponent as Close } from "../../Icons/close.svg";

function NewExpense({ handleChange, values }) {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h3>New expense</h3>
      <Form>
        <TableCard>
          <div className="d-flex justify-content-between table_card_header">
            <div className="d-flex">
              <Button
                tag={Link}
                to={`/expenses/:id/edit`}
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
              <Link to="/expenses">
                <Close />
              </Link>
            </div>
          </div>
          <fieldset disabled={loading}>
            <Table borderless className="table_card_table">
              <thead>
                <tr>
                  <th width="13%">handling date</th>
                  <th width="10%">suplier</th>
                  <th width="10%">client</th>
                  <th width="15%">project</th>
                  <th width="14%">expense details</th>
                  <th width="13%">owner</th>
                  <th width="15%">payment status</th>
                  <th width="10%">charge client</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="13%">
                    <Input type="date" tag={Field} name="handling_date" />
                  </td>
                  <td width="10%">
                    <Input
                      tag={Field}
                      component="select"
                      type="select"
                      name="supplier_id"
                      onChange={handleChange}
                    />
                  </td>
                  <td width="10%">
                    <Input
                      tag={Field}
                      component="select"
                      type="select"
                      name="client_id"
                      onChange={handleChange}
                    />
                  </td>
                  <td width="15%">
                    <Input
                      tag={Field}
                      component="select"
                      type="select"
                      name="project_id"
                      onChange={handleChange}
                    />
                  </td>
                  <td width="14%">
                    <Input tag={Field} name="details" />
                  </td>
                  <td width="13%">
                    <Input
                      tag={Field}
                      component="select"
                      type="select"
                      name="owner_id"
                      onChange={handleChange}
                    />
                  </td>
                  <td width="15%">
                    <Input tag={Field} name="status" />
                  </td>
                  <td width="10%">
                    <Input tag={Field} name="charge_client" />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table borderless className="table_card_table">
              <thead>
                <tr>
                  <th width="13%">invoice date</th>
                  <th width="10%">cost</th>
                  <th width="15%">cost for client</th>
                  <th width="14%">type</th>
                  <th width="13%">performa invoice #</th>
                  <th width="20%">tax invoice</th>
                  <th width="15%">internal PO #</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="13%">
                    <Input tag={Field} name="invoice_date" type="date" />
                  </td>
                  <td width="10%">
                    <Input tag={Field} name="cost" />
                  </td>

                  <td width="15%">
                    <Input tag={Field} name="cost_client" />
                  </td>
                  <td width="14%">
                    <Input
                      tag={Field}
                      component="select"
                      type="select"
                      name="type"
                      onChange={handleChange}
                    />
                  </td>
                  <td width="13%">
                    <Input tag={Field} name="performa_invoice" />
                  </td>
                  <td width="20%">
                    <Input tag={Field} name="tax_invoice" />
                  </td>
                  <td width="15%">
                    <Input tag={Field} name="internal_po" />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Table borderless className="table_card_table">
              <thead>
                <tr>
                  <th width="15%">currency</th>
                  <th colSpan="2">payment terms</th>
                  <th width="15%">invoice image</th>

                  <th colSpan="3">
                    <div className="d-flex justify-content-around align-items-center">
                      <div>Client charged for hours</div>
                      <CustomInput
                        onChange={handleChange}
                        label
                        tag={Field}
                        size="lg"
                        type="checkbox"
                        id="client_charged_for_hours"
                        name="client_charged_for_hours"
                        checked={values.client_charged_for_hours}
                      />
                    </div>
                  </th>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="13%">
                    <Input
                      tag={Field}
                      component="select"
                      type="select"
                      name="currency"
                      onChange={handleChange}
                    >
                      <option value="USD">USD</option>
                      <option value="NIS">NIS</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="RMB">RMB</option>
                    </Input>
                  </td>
                  <td colSpan="2">
                    <Input
                      tag={Field}
                      component="select"
                      type="select"
                      name="payment_terms"
                      onChange={handleChange}
                    >
                      <option value="CASH">CASH</option>
                      <option value="EOM + 30">EOM + 30</option>
                      <option value="EOM + 60">EOM + 60</option>
                      <option value="EOM + 90">EOM + 90</option>
                      <option value="NET + 30">NET + 30</option>
                      <option value="NET + 60">NET + 60</option>
                      <option value="NET + 90">NET + 90</option>
                    </Input>
                  </td>

                  <td width="15%">
                    <Input tag={Field} name="invoice_img" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </fieldset>
        </TableCard>
      </Form>
    </div>
  );
}

const CompWithFormik = withFormik({
  mapPropsToValues: () => ({
    handling_date: "",
    supplier_id: "",
    client_id: "",
    project_id: "ILS",
    owner_id: "",
    status: "",
    charge_client: "",
    invoice_date: "",
    cost: "",
    cost_client: "",
    performa_invoice: "",
    tax_invoice: "",
    internal_po: "",
    currency: "",
    payment_terms: "",
    invoice_img: ""
  }),
  handleSubmit: (values, { props, setSubmitting }) => {
    // props.setBuissModle(values.business_modle);
    // props.setBuissModle(values.business_modle);
    // props.setData({ ...props.data, ...values });
    // props.setStep(2);
    // setSubmitting(false);
  },
  validationSchema: Yup.object().shape({})
})(NewExpense);
const mapStateToProps = state => ({ clients: state.clients.clients });
export default connect(
  mapStateToProps,
  { getClients }
)(CompWithFormik);
