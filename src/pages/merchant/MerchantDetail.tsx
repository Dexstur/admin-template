import { FC, useEffect, useState } from "react";
import { useLocation, RouteProps } from "react-router-dom";
import { Content } from "adminlte-2-react";
import { Row, Col } from "react-bootstrap";
import { merchants, MerchantStatus, MerchantDetails } from "./merchants";
import { MerchantBreak } from "./Merchant.style";

export const MerchantDetailPage: FC<RouteProps> = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [merchant, setMerchant] = useState<MerchantDetails | null>(null);
  const [change, setChange] = useState(0);

  // Get a specific query parameter
  const id = queryParams.get("id");

  useEffect(() => {
    const currentMerchant = merchants.find((m) => m.id === id);
    if (currentMerchant) setMerchant(currentMerchant);
  }, [id, change]);

  function changeStatus() {
    const index = merchants.findIndex((m) => m.id === id);
    if (merchant) {
      if (merchant.status === MerchantStatus.ACTIVE) {
        merchants[index].status = MerchantStatus.DISABLED;
        setMerchant({ ...merchant, status: MerchantStatus.DISABLED });
        setChange((prev) => prev++);
        return;
      }
      merchants[index].status = MerchantStatus.ACTIVE;
      setMerchant({ ...merchant, status: MerchantStatus.ACTIVE });
      setChange((prev) => prev++);
    }
  }

  if (!merchant) {
    return (
      <Content
        title="Merchant"
        subTitle="Merchant Details"
        browserTitle="Merchant | Not Found"
        homeRoute="/dashboard"
      >
        <h1>Merchant Details</h1>
        <p>Merchant not found</p>
      </Content>
    );
  }
  return (
    <Content
      title="Merchant"
      subTitle="Merchant Details"
      browserTitle="Merchant"
      homeRoute="/dashboard"
    >
      <h1>Merchant Details</h1>
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
            <strong>Status:</strong>{" "}
            <span
              className={`${
                merchant.status === MerchantStatus.ACTIVE
                  ? "text-success text-bold"
                  : merchant.status === MerchantStatus.DISABLED
                  ? "text-danger text-bold"
                  : ""
              }`}
            >
              {merchant.status}
            </span>
          </p>
          <p className="card-text">
            <strong>Address:</strong> {merchant.address}
          </p>
        </div>
        <hr className="bg-primary" />
      </div>

      <br />
      <Row className="text-center">
        <Col s={12} md={3} className="d-flex justify-content-center mb-3">
          <div
            className={`btn w-100 ${
              merchant.status === MerchantStatus.ACTIVE
                ? "btn-danger"
                : "btn-success"
            }`}
            onClick={changeStatus}
          >
            {merchant.status === MerchantStatus.ACTIVE ? "Disable" : "Activate"}
          </div>
          <MerchantBreak></MerchantBreak>
        </Col>
        <Col s={12} md={3} className="d-flex justify-content-center mb-3">
          <div className="btn btn-warning w-100">Reset Password</div>
          <MerchantBreak></MerchantBreak>
        </Col>
        <Col s={12} md={3} className="d-flex justify-content-center mb-3">
          <div className="btn btn-success w-100">Update Merchant</div>
          <MerchantBreak></MerchantBreak>
        </Col>
      </Row>
    </Content>
  );
};
