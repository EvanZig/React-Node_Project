import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/myCss.css";
import LoggedInProfile from "./loggedin/LoggedInProfile";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import MainPage from "./loggedout/MainPage";
import {
  AuthIsNotSignedIn,
  AuthIsSignedIn,
  AuthProvider,
} from "./contexts/Context";
import MainPageContextWraper from "./contexts/MainPageContext";
import TopBarContextWrapper from "./contexts/TopBarContext";
import TopBar from "./components/TopBar";

const SignInRoutes = () => (
  <Routes>
    <Route path="/" element={<LoggedInProfile />} />
  </Routes>
);

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
  </Routes>
);

const Layout = () => (
  <TopBarContextWrapper>
    <TopBar />
    <Outlet />
  </TopBarContextWrapper>
);

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout />
        <AuthIsSignedIn>
          <SignInRoutes />
        </AuthIsSignedIn>
        <AuthIsNotSignedIn>
          <MainPageContextWraper>
            <MainRoutes />
          </MainPageContextWraper>
        </AuthIsNotSignedIn>
      </AuthProvider>
    </BrowserRouter>
  );
}
