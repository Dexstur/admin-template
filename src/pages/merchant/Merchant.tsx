import { FC, useState } from "react";
import { RouteProps } from "react-router-dom";
import { Content } from "adminlte-2-react";
import { MerchantTable } from "./MerchantTable";
import { merchants } from "./merchants";
import { CustomPagination } from "../../components";

export const MerchantPage: FC<RouteProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);

  function pageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
  }
  return (
    <Content
      title="Merchant"
      subTitle="Merchant"
      browserTitle="Merchant"
      homeRoute="/dashboard"
    >
      <h1>Merchants</h1>
      <MerchantTable merchants={merchants} />
      <CustomPagination
        currentPage={currentPage}
        pages={14}
        onPageChange={pageChange}
      />
    </Content>
  );
};
