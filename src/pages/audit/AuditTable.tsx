import { FC } from "react";
import { Table } from "react-bootstrap";
import { AuditEntry, ActionStatus } from "./audit.def";

interface Props {
  entries: AuditEntry[];
}

export const AuditTable: FC<Props> = ({ entries }) => {
  return (
    <div className="table-responsive">
      <Table striped>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User Name</th>
            <th scope="col">Action Type</th>
            <th scope="col">Status</th>
            <th scope="col">Action ID</th>
            <th scope="col">Account</th>
            <th scope="col">User ID</th>
            <th scope="col">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={entry.id}>
              <th scope="row">{index + 1}</th>
              <td>{entry.userName}</td>
              <td>{entry.actionType}</td>
              <td>
                <span
                  className={`${
                    entry.actionStatus === ActionStatus.SUCCESS
                      ? "text-success"
                      : "text-danger"
                  } text-bold`}
                >
                  {entry.actionStatus}
                </span>
              </td>
              <td>{entry.actionId}</td>
              <td>{entry.targetAccount}</td>
              <td>{entry.userId}</td>
              <td>{entry.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
