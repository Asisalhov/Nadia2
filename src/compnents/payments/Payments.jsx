import React, { useState } from "react";
import TableCard from "../layout/TableCard";
import { connect } from "react-redux";
import { Table, Button, Input } from "reactstrap";

import CardSearch from "../layout/CardSearch";
import CardPagination from "../layout/CardPagination";

import Spinner from "../layout/Spinner";

function Payments() {
  const [loading, setLoading] = useState(false);
  const payments = [];
  return (
    <div>
      <div>
        <h3>Payments - Scheduled</h3>
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
              </tr>
            </thead>

            {!loading ? (
              <tbody>
                {[1, 2, 3, 4, 5].map(
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
                        <Button className="table-card-button">
                          issue draft
                        </Button>
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
                <th>view</th>
              </tr>
            </thead>

            {!loading ? (
              <tbody>
                {[1, 2, 3, 4].map(
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
                      <td>
                        <Button
                          size="lg"
                          className="btn-circle table-card-button mr-2"
                          style={{
                            fontSize: "2rem"
                          }}
                        >
                          +
                        </Button>
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

export default Payments;
