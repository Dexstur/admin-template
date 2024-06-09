import { FC } from "react";
import { RouteProps } from "react-router-dom";
import { Content } from "adminlte-2-react";

export const AuditPage: FC<RouteProps> = () => {
  return (
    <Content
      title="Audit"
      subTitle="Audit"
      browserTitle="Audit"
      homeRoute="/dashboard"
    >
      <h1>Audit</h1>
    </Content>
  );
};
