import React, { useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
// import { addExpense } from "../../actions/expensesActions";
import TableCard from "../layout/TableCard";
// reactstrap
import { Table, Input, CustomInput, Button } from "reactstrap";
// icons
import { ReactComponent as Done } from "../../Icons/done.svg";
import { ReactComponent as Edit } from "../../Icons/edit.svg";
import { ReactComponent as Close } from "../../Icons/close.svg";

function NewExpense() {
  const [loading, setLoading] = useState(false);
  const [newExpense, setNewExpense] = useState({
    official_name: "",
    number: "",
    contact_person: "",
    phone_number: "",
    email: "",
    address: "",
    country: "",
    finance_contact: "",
    finance_email: "",
    currency: "",
    payment_terms: "",
    send_invoice_auto: false
  });

  const onInputChange = e =>
    setNewExpense({
      ...newExpense,
      [e.target.name]: e.target.value
    });
  const onCheckboxChange = e =>
    setNewExpense({
      ...newExpense,
      [e.target.id]: e.target.checked
    });

  const onSubmit = e => {
    // e.preventDefault();
    // setLoading(true);
    // addExpense(newExpense);
  };
  const {
    official_name,
    number,
    contact_person,
    phone_number,
    email,
    address,
    country,
    finance_contact,
    finance_email,
    currency,
    payment_terms,
    send_invoice_auto
  } = newExpense;
  return (
    <div>
      <h3>New expense</h3>
      <form onSubmit={onSubmit}>
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
                    <Input
                      onChange={onInputChange}
                      name="official_name"
                      value={official_name}
                      required
                    />
                  </td>
                  <td width="10%">
                    <Input
                      onChange={onInputChange}
                      name="number"
                      value={number}
                      required
                    />
                  </td>
                  <td width="10%">
                    <Input
                      onChange={onInputChange}
                      name="number"
                      value={number}
                      required
                    />
                  </td>
                  <td width="15%">
                    <Input
                      onChange={onInputChange}
                      name="contact_person"
                      value={contact_person}
                      required
                    />
                  </td>
                  <td width="14%">
                    <Input
                      onChange={onInputChange}
                      name="phone_number"
                      value={phone_number}
                      required
                    />
                  </td>
                  <td width="13%">
                    <Input
                      onChange={onInputChange}
                      name="email"
                      type="email"
                      value={email}
                      required
                    />
                  </td>
                  <td width="15%">
                    <Input
                      onChange={onInputChange}
                      name="address"
                      value={address}
                      required
                    />
                  </td>
                  <td width="10%">
                    <Input
                      onChange={onInputChange}
                      name="country"
                      value={country}
                      required
                    />
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
                    <Input
                      onChange={onInputChange}
                      name="official_name"
                      value={official_name}
                      required
                    />
                  </td>
                  <td width="10%">
                    <Input
                      onChange={onInputChange}
                      name="number"
                      value={number}
                      required
                    />
                  </td>

                  <td width="15%">
                    <Input
                      onChange={onInputChange}
                      name="contact_person"
                      value={contact_person}
                      required
                    />
                  </td>
                  <td width="14%">
                    <Input
                      onChange={onInputChange}
                      name="phone_number"
                      value={phone_number}
                      required
                    />
                  </td>
                  <td width="13%">
                    <Input
                      onChange={onInputChange}
                      name="email"
                      type="email"
                      value={email}
                      required
                    />
                  </td>
                  <td width="20%">
                    <Input
                      onChange={onInputChange}
                      name="address"
                      value={address}
                      required
                    />
                  </td>
                  <td width="15%">
                    <Input
                      onChange={onInputChange}
                      name="country"
                      value={country}
                      required
                    />
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
                        onChange={onCheckboxChange}
                        label
                        size="lg"
                        type="checkbox"
                        id="send_invoice_auto"
                        name="send_invoice_auto"
                        checked={send_invoice_auto}
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
                      onChange={onInputChange}
                      type="select"
                      name="payment_terms"
                      value={payment_terms}
                      required
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
                      onChange={onInputChange}
                      type="select"
                      name="payment_terms"
                      value={payment_terms}
                      required
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
                    <Input
                      onChange={onInputChange}
                      name="currency"
                      value={currency}
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </fieldset>
        </TableCard>
      </form>
    </div>
  );
}

export default NewExpense;
