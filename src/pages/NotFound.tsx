import { FC } from "react";
import { Content } from "adminlte-2-react";
// import { RouterProps } from "react-router-dom";

interface Props {
  loggedIn: boolean;
  path?: string;
}

export const NotFound: FC<Props> = ({ loggedIn }) => {
  if (loggedIn) {
    return (
      <Content
        title="Not Found"
        subTitle="404 Not Found"
        browserTitle="Not available"
      >
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </Content>
    );
  }
  return (
    <div className="container container-fluid text-center">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};
