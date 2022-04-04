import Cookies from "js-cookie";
import { useRoutes, useNavigate } from "react-router-dom";
import Themeroutes from "./routes/Router";
import AuthRoutes from "./routes/authRouter";
import { useEffect, useState } from "react";

const App = () => {
  // const navigate = useNavigate();
  const routing = useRoutes(Themeroutes);
  const authRouting = useRoutes(AuthRoutes);
  let isLogged = Cookies.get("isLogged");
  if (isLogged) {
    return <div className="dark">{routing}</div>;
  }

  // const [isLogged, setIsLogged] = useState(Cookies.get("logged"));
  // useEffect(() => {}, [isLogged]);
  // if (!isLogged) {
  return <div className="dark">{authRouting}</div>;
  // }
};

export default App;
