import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { getProjects } from "../../actions/projectsActions";
import { Table, Button, Badge } from "reactstrap";

import TableCard from "../layout/TableCard";
import CardSearch from "../layout/CardSearch";
import CardPagination from "../layout/CardPagination";
import Spinner from "../layout/Spinner";

// icon
import { ReactComponent as AttachmentIcon } from "../../Icons/attachment.svg";

function ProjectsList({ projects, getProjects }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getProjects();
      setLoading(false);
    };
    getData();
  }, [getProjects]);

  const redirectToProjectDetails = id => history.push(`/projects/${id}`);

  return (
    <div>
      <h3>Projects</h3>
      <TableCard>
        <div className="d-flex">
          <CardSearch />
          <Button tag={Link} to="/projects/new" className="table-card-button">
            New Project
          </Button>
        </div>

        <Table borderless hover className="table_card_table">
          <thead>
            <tr>
              <th>name</th>
              <th>client</th>
              <th>owner</th>
              <th>status</th>
              <th>due date</th>
              <th>attachments</th>
            </tr>
          </thead>

          {!loading ? (
            <tbody>
              {projects.map(
                ({
                  id,
                  project_name,
                  client_name,
                  owner_name,
                  attachments
                }) => (
                  <tr
                    key={id}
                    onClick={() => redirectToProjectDetails(id)}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <td>{project_name}</td>
                    <td>{client_name}</td>
                    <td>{owner_name}</td>
                    <td>
                      <Badge color="success" pill className="table-card-badge">
                        Done
                      </Badge>
                    </td>
                    <td>11/10/2018</td>
                    <td>
                      <a
                        href={attachments}
                        style={{
                          color: `${attachments ? "#A3A6B4" : "#E9E9F0"}`,
                          fontSize: "1.5em"
                        }}
                      >
                        <AttachmentIcon />
                      </a>
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
  projects: state.projects.projects
});
export default connect(
  mapStateToProps,
  {
    getProjects
  }
)(ProjectsList);
