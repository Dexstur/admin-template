import { transactions } from "./transaction";
import { Table } from "react-bootstrap";
import { TransactionType } from "./transaction";

export function TransactionTable() {
  return (
    <div>
      <Table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Transaction ID</th>
            <th scope="col">Transaction Type</th>
            <th scope="col">Transaction Amount</th>
            <th scope="col">Service Type</th>
            <th scope="col">Service Charge</th>
            <th scope="col">VAT</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Description</th>
            <th scope="col">Remark</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="p-2"
              style={{ cursor: "pointer" }}
            >
              <th scope="row">{transaction.id}</th>
              <td>{transaction.transactionId}</td>
              <td
                style={{
                  color:
                    transaction.transactionType === TransactionType.CREDIT
                      ? "green"
                      : "red",
                }}
              >
                {transaction.transactionType}
              </td>
              <td>{transaction.transactionAmount}</td>
              <td>{transaction.serviceType}</td>
              <td>{transaction.serviceCharge}</td>
              <td>{transaction.vat}</td>
              <td>{transaction.date}</td>
              <td>{transaction.status}</td>
              <td>{transaction.description}</td>
              <td>{transaction.remark}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
