import { Link, Route, Routes, useHref, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { History } from "./Pages/History/History";
import { Home } from "./Pages/Home/Home";
import { Loan } from "./Pages/Loan/Loan";
import { Login } from "./Pages/Login/Login";
import { Note } from "./Pages/Note/Note";
import { Return } from "./Pages/Return/Return";
import { Transaction } from "./Pages/Transaction/Transaction";
import { View } from "./Pages/View/View";

export const MainRouter = () => {
  const token = localStorage.getItem("token");
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "admin" && password === "admin") {
      localStorage.setItem("token", email);
      setIsAuthenticate(true);
    } else {
      alert("Login Failed");
    }
  };

  useEffect(() => {
    setIsAuthenticate(token ? true : false);
  }, [token]);

  const Authenticate = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/note" element={<Note />} />
        <Route path="/return" element={<Return />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/view" element={<View />} />
      </Routes>
    );
  };

  const Unauthenticate = () => {
    return (
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
      </Routes>
    );
  };
  return isAuthenticate ? <Authenticate /> : <Unauthenticate />
};
