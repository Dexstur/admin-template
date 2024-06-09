import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className=" container container-fluid text-center">
      <h1>Home Page</h1>
      <button onClick={() => navigate("/dashboard")}>Login</button>
    </div>
  );
};
