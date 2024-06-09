import { Sidebar } from "adminlte-2-react";

const { Item } = Sidebar;

export const sidebar = [
  <Item to="/dashboard" key="dashboard" text="Dashboard" icon="fa-house" />,
  <Item to="/merchant" key="merchant" text="Merchants" icon="fa-user-tie" />,
  <Item
    to="/transaction"
    key="transaction"
    text="Transactions"
    icon="fa-right-left"
  />,
  <Item to="/audit" key="audit" text="Audit" icon="fa-cash-register" />,
  <Item to="/settings" key="settings" text="Settings" icon="fa-gear" />,
];
