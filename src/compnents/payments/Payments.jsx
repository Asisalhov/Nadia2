import React, { useState, useEffect } from "react";
import TableCard from "../layout/TableCard";
import { connect } from "react-redux";
import { getPayments } from "../../actions/paymentsActions";
import { Table, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";

import CardSearch from "../layout/CardSearch";
import CardPagination from "../layout/CardPagination";

import { ReactComponent as PlusIcon } from "../../Icons/plus.svg";
import { ReactComponent as GetIcon } from "../../Icons/get.svg";
// import { ReactComponent as DeleteIcon } from "../../Icons/delete.png";
import Spinner from "../layout/Spinner";

import deleteIcon from "../../Icons/delete.png";
const DeleteIcon = ({ ...props }) => <img src={deleteIcon} alt="" {...props} />;

function Payments({ getPayments, payments }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getPayments();
      setLoading(false);
    };
    getData();
  }, [getPayments]);
  return (
    <div>
      <div>
        <h3>Payments - Scheduled</h3>
        <TableCard>
          <div className="d-flex">
            <CardSearch />
            <Button tag={Link} to="/payments/new" className="table-card-button">
              New Payment
            </Button>
          </div>

          <Table borderless hover className="table_card_table">
            <thead>
              <tr>
                <th>project</th>
                <th>client</th>
                <th>phase</th>
                <th>phase date</th>
                <th>amount due</th>
                <th>payment date</th>
                <th className="text-center">issue payment</th>
                <th className="text-center">get document</th>
                <th className="text-center">delete</th>
              </tr>
            </thead>

            {!loading ? (
              <tbody>
                {payments
                  .filter(payment => payment.status === "scheduled")
                  .map(
                    ({
                      id,
                      project_name,
                      client,
                      phase,
                      phase_date,
                      amount_due,
                      payment_date,
                      status
                    }) => (
                      <tr key={id}>
                        <td>{project_name}</td>
                        <td>{client}</td>
                        <td>{phase}</td>
                        <td>{phase_date}</td>
                        <td>{amount_due}</td>
                        <td>
                          {new Date(payment_date.seconds * 1000)
                            .toISOString()
                            .slice(0, 10)}
                        </td>

                        <td
                          style={{
                            fontSize: "1.5rem",
                            paddingTop: 0
                          }}
                          className="text-center"
                        >
                          <PlusIcon
                            style={{
                              cursor: "pointer"
                            }}
                          />
                        </td>
                        <td
                          style={{
                            fontSize: "1.5rem",
                            paddingTop: 0
                          }}
                          className="text-center"
                        >
                          <GetIcon
                            style={{
                              cursor: "pointer"
                            }}
                          />
                        </td>
                        <td
                          style={{
                            fontSize: "1.5rem",
                            paddingTop: 0
                          }}
                          className="text-center"
                        >
                          <DeleteIcon
                            style={{
                              cursor: "pointer"
                            }}
                          />
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            ) : null}
          </Table>
          {loading ? <Spinner /> : null}
          <div className="d-flex justify-content-end">
            <CardPagination />
          </div>
        </TableCard>
      </div>
      <div>
        <h3>Payments - Issued</h3>
        <TableCard>
          <div className="d-flex">
            <CardSearch />
          </div>

          <Table borderless hover className="table_card_table">
            <thead>
              <tr>
                <th>project</th>
                <th>client</th>
                <th>phase</th>
                <th>phase date</th>
                <th>amount due</th>
                <th>payment date</th>
                <th>status</th>
                <th>issue payment</th>
                <th>get document</th>
                <th>delete</th>
              </tr>
            </thead>

            {!loading ? (
              <tbody>
                {payments
                  .filter(payment => payment.status !== "scheduled")
                  .map(
                    ({
                      id = 5,
                      project_name = "Google home mini",
                      client_name = "Google",
                      phase = "Farming",
                      phase_date = "DD/MM/YYYY - DD/MM/YYYY",
                      amount_due = "22,000 USD",
                      payment_date = " DD/MM/YYYY",
                      status
                    }) => (
                      <tr key={id}>
                        <td>{project_name}</td>
                        <td>{client_name}</td>
                        <td>{phase}</td>
                        <td>{phase_date}</td>
                        <td>{amount_due}</td>
                        <td>{payment_date}</td>

                        <td>
                          <Input type="select">
                            <option value="">Paid</option>
                            <option value="">Delayed</option>
                            <option value="">Scheduled</option>
                            <option value="">Cancelled</option>
                          </Input>
                        </td>
                        <td
                          style={{
                            fontSize: "1.5rem",
                            paddingTop: 0
                          }}
                        >
                          <PlusIcon
                            style={{
                              cursor: "pointer"
                            }}
                          />
                        </td>
                        <td
                          style={{
                            fontSize: "1.5rem",
                            paddingTop: 0
                          }}
                        >
                          <GetIcon
                            style={{
                              cursor: "pointer"
                            }}
                          />
                        </td>
                        <td
                          style={{
                            fontSize: "1.5rem",
                            paddingTop: 0
                          }}
                        >
                          <DeleteIcon
                            style={{
                              cursor: "pointer"
                            }}
                          />
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            ) : null}
          </Table>
          {loading ? <Spinner /> : null}
          <div className="d-flex justify-content-end">
            <CardPagination />
          </div>
        </TableCard>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  payments: state.payments.payments
});
export default connect(
  mapStateToProps,
  { getPayments }
)(Payments);
