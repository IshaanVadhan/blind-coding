import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AuthProvider } from "./context";
import Login from "./Login";
import Ide from "./Ide";
import Home from "./Home";
import Instructions from "./Instructions";
import Problem from "./Problem";
import Slots from "./Slots";
import Thank from "./Thank";
import './App.css';
import ProtectedRoutes from "./helpers/route-protector";
import { RedirectRoutes, ProblemProtector, CodeProtector, ThankProtector } from "./helpers/route-protector";

function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<RedirectRoutes />}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/instructions" element={<Instructions />} />
            <Route path="/:slotID/login" element={<Login />} />
            <Route exact path="/slots" element={<Slots />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route element={<ProblemProtector />}>
              <Route exact path="/:slotID/problem" element={<Problem />} />
            </Route>
            <Route element={<CodeProtector />}>
              <Route path="/:slotID/code" element={<Ide />} />
            </Route>
          </Route>
          <Route element={<ThankProtector />}>
            <Route path="/thankyou" element={<Thank />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
    </>
  );
}

export default App;
