import React from "react";
import TableCard from "../layout/TableCard";
import { Table, Input, CustomInput } from "reactstrap";
function NewClient() {
  return (
    <div>
      <h3>Clients</h3>
      <TableCard>
        <div />
        <Table borderless className="table_card_table">
          <thead>
            <tr>
              <th>official name</th>
              <th>number</th>
              <th>contact person</th>
              <th>phone number</th>
              <th>email</th>
              <th>address</th>
              <th>country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
            </tr>
          </tbody>
          <thead className="mt-2">
            <tr>
              <th>finance contact</th>
              <th colspan="2">finance E-mail</th>
              {/* <th /> */}
              <th>currency</th>
              <th>payment terms</th>
              <th colspan="2">
                <div className="d-flex justify-content-around align-items-center">
                  <div>send invoice automaticaly</div>
                  <CustomInput label size="lg" type="checkbox" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Input />
              </td>
              <td colspan="2">
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td>
                <Input />
              </td>
              <td />
            </tr>
          </tbody>
        </Table>
      </TableCard>
    </div>
  );
}

export default NewClient;
