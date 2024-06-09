import { FC } from "react";
import { RouteProps } from "react-router-dom";
import { Content } from "adminlte-2-react";

export const SettingsPage: FC<RouteProps> = () => {
  return (
    <Content
      title="Settings"
      subTitle="Settings"
      browserTitle="Settings"
      homeRoute="/dashboard"
    >
      <h1>Settings</h1>
    </Content>
  );
};
