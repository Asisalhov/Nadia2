import React, { useState } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { Table, Button, Badge } from "reactstrap";

import TableCard from "../layout/TableCard";
import CardSearch from "../layout/CardSearch";
import CardPagination from "../layout/CardPagination";
import Spinner from "../layout/Spinner";
import { ReactComponent as AttachmentIcon } from "../../Icons/attachment.svg";

function ExpensesList() {
  const [loading, setLoading] = useState(false);

  const redirectToExpenseDetails = id => history.push(`/expenses/${id}`);

  const expenses = [];
  return (
    <div>
      <h3>Expenses</h3>
      <TableCard>
        <div className="d-flex">
          <CardSearch />
          <Button tag={Link} to="/expenses/new" className="table-card-button">
            New Expense
          </Button>
        </div>
        <div
          style={{
            maxWidth: "77vw",
            overflowX: "scroll"
          }}
        >
          <Table borderless hover className="table_card_table">
            <thead>
              <tr>
                <th>handling data</th>
                <th>supplier</th>
                <th>client</th>
                <th>project</th>
                <th>expense details</th>
                <th>owner</th>
                <th>payment status</th>
                <th>charge client</th>
                <th>cost</th>
                <th>cost for client</th>
                <th>type</th>
                <th>invoice date</th>
                <th>payment terms</th>
                <th>performa invoice</th>
                <th>tax invoice</th>
                <th>internal PO</th>
                <th>invoice scan</th>
              </tr>
            </thead>

            {!loading ? (
              <tbody>
                {[1, 2, 3, 4, 5].map(
                  ({
                    id,
                    handling_date = "DD/MM/YYYY",
                    supplier_name = "Jhon",
                    client_name = "google",
                    details = "test tes test",
                    owner_name = "Boaz Zemer",
                    payment_status = "",
                    charge_client = true,
                    cost = "50 NIS",
                    cost_client = "70 NIS",
                    type = "type1",
                    invoice_date = "DD/MM/YYYY",
                    payment_terms = "NET+30",
                    performa_invoice = "123456789",
                    tax_invoice = "1234567",
                    internal_PO = "123456789"
                  }) => (
                    <tr
                      key={id}
                      onClick={() => redirectToExpenseDetails(id)}
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      <td>{handling_date}</td>
                      <td>{supplier_name}</td>
                      <td>{client_name}</td>
                      <td>{details}</td>
                      <td>{owner_name}</td>
                      <td>
                        <Button
                          size="lg"
                          disabled
                          className="btn-circle table-card-button mr-2"
                          style={{
                            fontSize: "2rem"
                          }}
                        >
                          +
                        </Button>
                      </td>
                      <td>{charge_client ? "YES" : "NO"}</td>
                      <td>{cost}</td>
                      <td>{cost_client}</td>
                      <td>{type}</td>
                      <td>{invoice_date}</td>
                      <td>{payment_terms}</td>
                      <td>{performa_invoice}</td>
                      <td>{tax_invoice}</td>
                      <td>{internal_PO}</td>
                      <td>{payment_terms}</td>
                      <td>
                        <AttachmentIcon />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            ) : null}
          </Table>
          {loading ? <Spinner /> : null}
        </div>

        <div className="d-flex justify-content-end mt-3">
          <CardPagination />
        </div>
      </TableCard>
    </div>
  );
}

export default ExpensesList;
