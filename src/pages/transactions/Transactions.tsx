import { FC } from "react";
import { RouteProps } from "react-router-dom";
import { Content } from "adminlte-2-react";

export const TransactionsPage: FC<RouteProps> = () => {
  return (
    <Content
      title="Transactions"
      subTitle="Transactions"
      browserTitle="Transactions"
      homeRoute="/dashboard"
    >
      <h1>Transactions</h1>
    </Content>
  );
};
