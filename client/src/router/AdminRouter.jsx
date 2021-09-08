import React, { useEffect } from 'react'

import Navigation from "@/layout/Navigation";
import { Layout } from "antd";
import AppRouter from "./AppRouter";

import AuthRouter from "./AuthRouter";

import { useSelector } from "react-redux";
import { selectAuth } from "@/redux/auth/selectors";

export default function AdminRouter() {
    const { isLoggedIn } = useSelector(selectAuth);

    useEffect(() => {
        console.log("isLoggedIn : ", isLoggedIn);
    }, [isLoggedIn]);
    if (isLoggedIn === false)
        return (
            <Layout style={{ minHeight: "100vh" }}>
                <AuthRouter />
            </Layout>
        );
    return (
        <>
            <Navigation />
            <Layout style={{ minHeight: "100vh" }}>
                <AppRouter />
            </Layout>
        </>
    )
}
