import React, { useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

export default function ProtectedRoutes() {
    const location = useLocation();
    const {currentUser} = useAuth();

    return (
        (currentUser?.accessToken) ? <Outlet /> : <Navigate to={`/`} state={{ from: location }} replace />
    );
}

export function ProblemProtector() {
    const location = useLocation();
    const {currentUser} = useAuth();
    const probTimer = parseInt(localStorage.getItem('probTimer'));

    return (
        (!probTimer) ? <Outlet /> : <Navigate to={`/${currentUser?.slotID}/code`} state={{ from: location }} replace />
    );
}

export function CodeProtector() {
    const location = useLocation();
    const {currentUser} = useAuth();
    const codeTimer = parseInt(localStorage.getItem('codeTimer'));

    return (
        (!codeTimer) ? <Outlet /> : <Navigate to={`/${currentUser?.slotID}/problem`} state={{ from: location }} replace />
    );
}

export function ThankProtector() {
    const location = useLocation();
    const {currentUser} = useAuth();
    const codeStatus = parseInt(localStorage.getItem('codeStatus'));

    return (
        !(currentUser?.accessToken) ? <Navigate to={`/`} state={{ from: location }} replace /> : codeStatus ? <Outlet /> : <Navigate to={`/${currentUser?.slotID}/problem`} state={{ from: location }} replace />
    );
}

export function RedirectRoutes() {
    const location = useLocation();
    const {currentUser} = useAuth();

    return (
        !(currentUser?.accessToken) ? <Outlet /> : <Navigate to={`/${currentUser?.slotID}/problem`} state={{ from: location }} replace />
    );
}