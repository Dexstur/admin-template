import { FC } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminLTE, { Navbar } from "adminlte-2-react";
import { sidebar } from "./components";
import { CustomNav, CustomNavItem } from "./Custom.style";
import {
  Dashboard,
  HomePage,
  NotFound,
  MerchantPage,
  MerchantDetailPage,
  TransactionsPage,
  AuditPage,
  SettingsPage,
} from "./pages";

const baseURLs = ["/", "/login", "/signup"];

const Layout: FC = () => {
  const location = useLocation();

  const loggedIn = !baseURLs.includes(location.pathname);

  if (loggedIn) {
    return (
      <AdminLTE
        title={["Terminal Management System"]}
        titleShort={["TMS"]}
        theme="blue"
        homeTo="/dashboard"
        sidebar={sidebar}
      >
        <Navbar.Core>
          <CustomNav>
            <CustomNavItem>Example</CustomNavItem>
            <CustomNavItem>Sample</CustomNavItem>
          </CustomNav>
        </Navbar.Core>
        <Dashboard path="/dashboard" />
        <MerchantDetailPage path="/merchant/details" />
        <MerchantPage path="/merchant" />
        <TransactionsPage path="/transaction" />
        <AuditPage path="/audit" />
        <SettingsPage path="/settings" />
        <NotFound path="*" loggedIn />
      </AdminLTE>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound loggedIn />} />
    </Routes>
  );
};

export default Layout;
