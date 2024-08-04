import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Router } from "./routes/router";
import { setUserGlobal } from "./contexts/users/users.contexts";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const res = JSON.parse(sessionStorage.getItem("User"));

    if (res) {
      dispatch(setUserGlobal(res));
    } else {
      console.log("Inicia sesión");
    }
  }, []);

  return <Router />;
};
