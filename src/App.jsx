import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import React, { useContext, Suspense } from 'react';
import { Helmet } from 'react-helmet';
const Home = React.lazy(() => import('./pages/Home'));
const Events = React.lazy(() => import('./pages/Events'));
const Members = React.lazy(() => import('./pages/Members'));
const ForgetPassword = React.lazy(() => import('./pages/ForgetPassword'));
const ChangePass = React.lazy(() => import('./pages/ChangePass'));
const EnterOTP = React.lazy(() => import('./pages/EnterOTP'));
const UserData = React.lazy(() => import('./pages/UserData'));
const Signin = React.lazy(() => import('./pages/Signin'));
const Signup = React.lazy(() => import('./pages/Signup'));
const Achievementss = React.lazy(() => import('./pages/Achievements'));
const Featured = React.lazy(() => import('./pages/Featured'));
const Recruitment = React.lazy(() => import('./pages/Recruitments'));
const Admin = React.lazy(() => import('./pages/Admin'));
const Register = React.lazy(() => import('./pages/Register'));
//const Classes = React.lazy(() => import("./pages/Classes"));

import AuthContext from './store/auth-context';
import axios from 'axios';
import LoadingPage from './pages/LoadingPage';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Helmet>
        <title>KIIT ROBOTICS SOCIETY</title>
        <meta
          name="description"
          content="KIIT Robotics Society  
            KRS (KIIT ROBOTICS SOCIETY) focuses on research, knowledge sharing and learning with the aim of embracing new technology and making new discoveries in the field of Robotics
             with a high standard of ethics in service to the community.
              It enriches the enthusiastic students with technical"
        />
        <meta
          property="og:title"
          content="Official Website Of KIIT ROBOTICS SOCIETY"
        />
        <meta property="og:url" content="https://krs.kiit.ac.in" />
        <meta
          property="og:description"
          content="KIIT Robotics Society  
KRS (KIIT ROBOTICS SOCIETY) focuses on research, knowledge sharing and learning with the aim of embracing new technology and making new discoveries in the field of Robotics
 with a high standard of ethics in service to the community.
  It enriches the enthusiastic students with technical"
        />
        <meta
          property="og:image"
          itemprop="image"
          content="https://ik.imagekit.io/krs/krslogo_xvWTwoYCz.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660033699873"
        />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://twitter.com/services_enr"
        ></meta>
        <meta property="twitter:title" content="KIIT ROBOTICS SOCIETY"></meta>
      </Helmet>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<LoadingPage />}>
                {' '}
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/events"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Events />
              </Suspense>
            }
          />
          <Route
            path="/members"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Members />
              </Suspense>
            }
          />

          <Route
            path="/achievements"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Achievementss />
              </Suspense>
            }
          />
          {!authCtx.isLoggedIn && (
            <Route
              path="/signin"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Signin />
                </Suspense>
              }
            />
          )}
          {!authCtx.isLoggedIn && (
            <Route
              path="/signup"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Signup />
                </Suspense>
              }
            />
          )}

          {!authCtx.isLoggedIn && (
            <Route
              path="/ForgetPassword"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ForgetPassword />
                </Suspense>
              }
            />
          )}
          {!authCtx.isLoggedIn && (
            <Route
              path="/EnterOTP"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <EnterOTP />
                </Suspense>
              }
            />
          )}
          {!authCtx.isLoggedIn && (
            <Route
              path="/ChangePass"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <ChangePass />
                </Suspense>
              }
            />
          )}
          {!authCtx.isLoggedIn && (
            <Route
              path="/AddDataUser"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <UserData />
                </Suspense>
              }
            />
          )}
          <Route
            path="/featured"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Featured />
              </Suspense>
            }
          />
          <Route
            path="/recruitments"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Recruitment />
              </Suspense>
            }
          />
          {authCtx.isLoggedIn && (
            <Route
              path="/admin/*"
              element={
                <Suspense fallback={<LoadingPage />}>
                  <Admin />
                </Suspense>
              }
            />
          )}
          <Route
            path="/form/:fid"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Register />
              </Suspense>
            }
          />
          {/* <Route
            path="/krsclasses"
            element={
              <Suspense fallback={<LoadingPage />}>
                <Classes />
              </Suspense>
            }
          /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
