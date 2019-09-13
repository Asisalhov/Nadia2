import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProject } from "../../actions/projectsActions";
import TableCard from "../layout/TableCard";
import CardPagination from "../layout/CardPagination";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import { Button, Table, Progress } from "reactstrap";

import { ReactComponent as Done } from "../../Icons/done.svg";
import { ReactComponent as Edit } from "../../Icons/edit.svg";
import { ReactComponent as Close } from "../../Icons/close.svg";
import { ReactComponent as Attachment } from "../../Icons/attachment.svg";

function ProjectDetails(props) {
  const { project, getProject, match } = props;

  const [loading, setLoading] = useState(true);
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      await getProject(match.params.id);
      setLoading(false);
    };
    getData();
  }, [getProject, match.params.id]);
  const onSubmit = () => {};
  return (
    <div>
      <h3>
        {" "}
        <small>{project.project_name}</small>
      </h3>

      <TableCard>
        <div className="d-flex justify-content-between table_card_header">
          <div className="d-flex">
            <Button
              size="lg"
              className={`btn-circle table-card-button mr-2 ${
                canEdit ? "disabled" : ""
              }`}
              onClick={() => setCanEdit(!canEdit)}
            >
              <Edit />
            </Button>
            <Button
              size="lg"
              className="btn-circle table-card-button  mr-2"
              onClick={onSubmit}
            >
              <Done />
            </Button>
            <Button size="lg" className="btn-circle table-card-button ">
              <Attachment />
            </Button>
          </div>
          <div>
            <Link to="/projects">
              <Close />
            </Link>
          </div>
        </div>

        <Table borderless hover className="table_card_table">
          <thead>
            <tr>
              <th>phase name</th>
              <th>hours (min)</th>
              <th>hours (max)</th>
              <th>hours (act)</th>
              <th>owner</th>
              <th>progress</th>
              <th>due date</th>
              <th>expenses</th>
              <th>completion</th>
            </tr>
          </thead>

          {!loading ? (
            <tbody>
              {project.tasks.map(
                ({
                  name,
                  hours_max,
                  hours_min,
                  hours_act,
                  owner,
                  progress,
                  due_date,
                  expenses,
                  completion
                }) => (
                  <tr
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <td>{name}</td>
                    <td>30</td>
                    <td>20</td>
                    <td>20</td>
                    <td>Mustapha lounici</td>
                    <td>
                      <Progress value={50} />
                    </td>
                    <td>11-02-2016</td>
                    <td>500$</td>
                    <td>X</td>
                  </tr>
                )
              )}
            </tbody>
          ) : null}
        </Table>
        <Table borderless className="table_card_table">
          <thead>
            <tr>
              <th>business model</th>
              <th>rates</th>
              <th>modeling commission</th>
              <th>po number</th>
              <th>Po budget</th>
              <th>currency</th>
            </tr>
          </thead>

          {!loading ? (
            <tbody>
              <tr>
                <td>{project.business_modle}</td>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>Product designer</td>
                        <td>{project.product_designer_rate}</td>
                      </tr>
                      <tr>
                        <td>Mechanical designer</td>
                        <td>{project.mec_designer_rate}</td>
                      </tr>
                      <tr>
                        <td>Digital designer</td>
                        <td>{project.digital_designer_rate}</td>
                      </tr>
                      <tr>
                        <td>VP</td>
                        <td>{project.vp_rate}</td>
                      </tr>
                      <tr>
                        <td>Partner</td>
                        <td>{project.partner_rate}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  {" "}
                  <table>
                    <tbody>
                      <tr>
                        <td>Local</td>
                        <td>{project.commission_local}%</td>
                      </tr>
                      <tr>
                        <td>Import</td>
                        <td>{project.commission_import}%</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <p>{project.po_number}</p>
                </td>
                <td>
                  <p>
                    {project.po_hours}Hours/
                    {(project.amount_due || project.down_payment_fee) *
                      project.po_hours}{" "}
                    {project.currnecy}
                  </p>
                </td>

                <td>{project.currnecy}</td>
              </tr>
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
  project: state.projects.currentProject
});
export default connect(
  mapStateToProps,
  {
    getProject
  }
)(ProjectDetails);
