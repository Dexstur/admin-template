import { FC } from "react";
import { RouteProps } from "react-router-dom";
import { Content } from "adminlte-2-react";

export const Dashboard: FC<RouteProps> = () => {
  return (
    <Content
      title="Dashboard"
      subTitle="Dashboard"
      browserTitle="Dashboard"
      homeRoute="/dashboard"
    >
      <h1>Dashboard</h1>
    </Content>
  );
};
