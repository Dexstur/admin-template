import { FC, useEffect, useState } from "react";
import { RouteProps, useLocation, useNavigate } from "react-router-dom";
import { Content } from "adminlte-2-react";
import { AuditEntry } from "./audit.def";
import axios from "axios";
import { AuditTable } from "./AuditTable";
import { CustomPagination } from "../../components";

export const AuditPage: FC<RouteProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [entries, setEntries] = useState<AuditEntry[]>([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const pageQuery = queryParams.get("page");

  useEffect(() => {
    if (pageQuery) {
      const currentPage = parseInt(pageQuery);

      if (currentPage > 0) {
        setEntries([]);
        setPage(currentPage);
      }
    }
  }, [pageQuery]);
  useEffect(() => {
    axios
      .get("https://api.mockaroo.com/api/cbf7e900?count=10&key=a48cf320")
      .then((res) => {
        console.log(res.data);
        const data = res.data as AuditEntry[];
        const orderedData = data.sort(
          (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
        );
        setEntries(orderedData);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message || "An error occurred");
      });
  }, [page]);

  function pageChange(pageNumber: number) {
    navigate(`/audit?page=${pageNumber}`);
  }

  if (error) {
    return (
      <Content
        title="Audit"
        subTitle="Audit"
        browserTitle="Audit"
        homeRoute="/dashboard"
      >
        <h1>Audit</h1>
        <p>{error}</p>
      </Content>
    );
  }

  if (entries.length === 0) {
    return (
      <Content
        title="Audit"
        subTitle="Audit"
        browserTitle="Audit"
        homeRoute="/dashboard"
      >
        <h1>Audit</h1>
        <p>Loading...</p>
      </Content>
    );
  }
  return (
    <Content
      title="Audit"
      subTitle="Audit"
      browserTitle="Audit"
      homeRoute="/dashboard"
    >
      <h1>Audit</h1>
      <AuditTable entries={entries} />
      <CustomPagination
        currentPage={page}
        pages={24}
        onPageChange={pageChange}
      />
    </Content>
  );
};
