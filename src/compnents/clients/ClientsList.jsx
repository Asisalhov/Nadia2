import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { getClients } from "../../actions/clientsActions";
import { Table, Button, Badge } from "reactstrap";

import TableCard from "../layout/TableCard";
import CardSearch from "../layout/CardSearch";
import CardPagination from "../layout/CardPagination";
import Spinner from "../layout/Spinner";

function ClientsList({ clients, getClients }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getClients();
      setLoading(false);
    };
    getData();
  }, [getClients]);
  const redirectToClientDetails = id => history.push(`/clients/${id}`);
  return (
    <div>
      <h3>Clients</h3>
      <TableCard>
        <div className="d-flex">
          <CardSearch />
          <Button tag={Link} to="/clients/new" className="table-card-button">
            New Client
          </Button>
        </div>

        <Table borderless hover className="table_card_table">
          <thead>
            <tr>
              <th>name</th>
              <th>number</th>
              <th>contact name</th>
              <th className="text-center">active projects</th>
            </tr>
          </thead>

          {!loading ? (
            <tbody>
              {clients.map(
                ({ id, official_name, number, contact_person, projects }) => (
                  <tr
                    key={id}
                    onClick={() => redirectToClientDetails(id)}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <td>{official_name}</td>
                    <td>{number}</td>
                    <td>{contact_person}</td>
                    <td className="text-center">
                      {["google", "facebook", "fiverr"].map(a => (
                        <Badge
                          color="success"
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
const mapStateToProps = state => ({
  clients: state.clients.clients
});
export default connect(
  mapStateToProps,
  {
    getClients
  }
)(ClientsList);
