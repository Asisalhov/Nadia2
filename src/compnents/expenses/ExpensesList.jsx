import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import history from "../../history";
import { connect } from "react-redux";
import { Table, Button, Badge } from "reactstrap";
import { getExpenses } from "../../actions/expensesActions";
import TableCard from "../layout/TableCard";
import CardSearch from "../layout/CardSearch";
import CardPagination from "../layout/CardPagination";
import Spinner from "../layout/Spinner";
import { ReactComponent as AttachmentIcon } from "../../Icons/attachment.svg";
import parse from "date-fns/parse";
import format from "date-fns/format";
class ExpensesList extends React.Component {
  // const [loading, setLoading] = useState(false);
  // const [allExpenses, setExpenses] = useState([]);
  state={
    loading: false,
    allExpenses: []
  }
  UNSAFE_componentWillMount(){
    this.setState({loading: true})
    const setData = async ()=>{
      await this.props.getExpenses();
      this.setState({loading: false})
  }
    setData()
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({allExpenses: nextProps.expenses})
  }
  // useEffect(() => {
  //   const getData = async () => {
  //     setLoading(true);
  //     await getExpenses();
  //     setLoading(false);
  //     // console.log( expenses)
  //     setAllExpense()
  //   };
  //   getData();
  // }, [getExpenses]);
  // const setAllExpense = () => {
  //   setExpenses(expenses)
  //   console.log(expenses)
  // }
  onSearchResult = (e) =>{
    console.log(e.target.value)
    const result = this.props.expenses.filter(expense=>(expense.project_name.toLowerCase().includes(e.target.value.toLowerCase())))
    e.preventDefault()
    this.setState({allExpenses: result})
  }
  redirectToExpenseDetails = id => history.push(`/expenses/${id}`);
render(){
  return (
    <div>
      <h3>Expenses</h3>
      <TableCard>
        <div className="d-flex">
          <CardSearch 
            onSearchResult={this.onSearchResult}
          />
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
          <Table borderless hover className="table_card_table expenses">
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
                <th colSpan="2">cost</th>
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

            {!this.state.loading ? (
              <tbody>
                {this.state.allExpenses.map(
                  ({
                    id,
                    handling_date,
                    supplier_name,
                    client_name,
                    details,
                    owner_name,
                    project_name,
                    payment_status,
                    charge_client,
                    cost,
                    cost_client,
                    type,
                    invoice_date,
                    payment_terms,
                    performa_invoice,
                    tax_invoice,
                    internal_po,
                    attachment,
                    currency
                  }) => (
                    <tr
                      key={id}
                      onClick={() => this.redirectToExpenseDetails(id)}
                      style={{
                        cursor: "pointer"
                      }}
                    >
                      <td>
                        {format(
                          parse(handling_date, "yyyy-MM-dd", new Date()),
                          "dd/MM/yyyy"
                        )}
                      </td>
                      <td>{supplier_name}</td>
                      <td>{client_name}</td>
                      <td>{project_name}</td>
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
                      <td colSpan="2">
                        {cost} {currency}
                      </td>
                      <td>
                        {cost_client} {currency}
                      </td>
                      <td>{type}</td>
                      <td>{invoice_date}</td>
                      <td>{payment_terms}</td>
                      <td>{performa_invoice}</td>
                      <td>{tax_invoice}</td>
                      <td>{internal_po}</td>
                      <td>
                        <a
                          href={attachment}
                          target="_blank"
                          rel="noopener noreferrer"
                          disabled={!attachment}
                          style={{
                            color: `${attachment ? "#A3A6B4" : "#E9E9F0"}`,
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
          {this.state.loading ? <Spinner /> : null}
        </div>

        <div className="d-flex justify-content-end mt-3">
          <CardPagination />
        </div>
      </TableCard>
    </div>
  );}
}
const mapStateToProps = state => ({
  expenses: state.expenses.expenses
});
export default connect(
  mapStateToProps,
  { getExpenses }
)(ExpensesList);
