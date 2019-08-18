import React, { useState } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { Table, Button, Badge } from "reactstrap";

import TableCard from "../layout/TableCard";
import CardSearch from "../layout/CardSearch";
import CardPagination from "../layout/CardPagination";
import Spinner from "../layout/Spinner";

function SuppliersList() {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h3>Suppliers</h3>
      <TableCard>
        <div className="d-flex">
          <CardSearch title="suppliers" />
          <Button tag={Link} to="/suppliers/new" className="table-card-button">
            New Supplier
          </Button>
        </div>

        <Table borderless hover className="table_card_table">
          <thead>
            <tr>
              <th>name</th>
              <th>number</th>
              <th>contact name</th>
              <th>contact E-mail</th>
              <th>overdue payments</th>
            </tr>
          </thead>

          {!loading ? (
            <tbody>
              {[1, 2, 3, 4, 4].map(
                ({ id, official_name, number, contact_person, projects }) => (
                  <tr
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <td>Jon</td>
                    <td>51578454451</td>
                    <td>Jhon doe</td>
                    <td>Jhon.doe@gmail.com</td>
                    <td className="">
                      {["payment 1", "payment 1", "payment 1"].map(a => (
                        <Badge
                          color="warning"
                          pill
                          className="table-card-badge"
                        >
                          {a}
                        </Badge>
                      ))}
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
  );
}

export default SuppliersList;
