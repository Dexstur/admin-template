import { FC, useState } from "react";
import { RouteProps } from "react-router-dom";
import { Content } from "adminlte-2-react";
import { TransactionTable } from "./TransactionTable";
import { CustomPagination } from "../../components";

export const TransactionsPage: FC<RouteProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function pageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
  }
  return (
    <Content
      title="Transactions"
      subTitle="Transactions"
      browserTitle="Transactions"
      homeRoute="/dashboard"
    >
      <h1>Transactions</h1>
      <TransactionTable />
      <CustomPagination
        currentPage={currentPage}
        pages={14}
        onPageChange={pageChange}
      />
    </Content>
  );
};
