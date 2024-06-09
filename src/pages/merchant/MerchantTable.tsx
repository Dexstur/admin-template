import { FC } from "react";
import { Table } from "react-bootstrap";
import { MerchantDetails } from "./merchants";
import {
  MerchantCardContainer,
  MerchantTableContainer,
} from "./Merchant.style";

interface Props {
  merchants: MerchantDetails[];
}

export const MerchantTable: FC<Props> = ({ merchants }) => {
  return (
    <div className="merchant-table">
      <MerchantTableContainer>
        <Table striped className="d-none d-md-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Merchant ID</th>
              <th scope="col">Account Number</th>
              <th scope="col">Address</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {merchants.map((merchant) => (
              <tr key={merchant.id}>
                <th scope="row">{merchant.id}</th>
                <td>{merchant.firstName}</td>
                <td>{merchant.lastName}</td>
                <td>{merchant.merchantId}</td>
                <td>{merchant.accountNumber}</td>
                <td>{merchant.address}</td>
                <td>
                  <a
                    href={`/merchant/details?id=${merchant.id}`}
                    className="btn btn-primary"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MerchantTableContainer>

      <MerchantCardContainer>
        {merchants.map((merchant) => (
          <>
            <div className="card mb-3 border-primary" key={merchant.id}>
              <div className="card-body">
                <h5 className="card-title">
                  {merchant.firstName} {merchant.lastName}
                </h5>
                <p className="card-text">
                  <strong>ID:</strong> {merchant.merchantId}
                </p>
                <p className="card-text">
                  <strong>Account Number:</strong> {merchant.accountNumber}
                </p>
                <p className="card-text">
                  <strong>Address:</strong> {merchant.address}
                </p>
                <a
                  href={`/merchant/details?id=${merchant.id}`}
                  className="btn btn-primary"
                >
                  View
                </a>
              </div>
            </div>
            <hr className="bg-primary" />
          </>
        ))}
      </MerchantCardContainer>
    </div>
  );
};
