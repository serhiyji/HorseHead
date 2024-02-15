import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import { useTypedSelector } from "./hooks/useTypedSelector";
import NotFound from "./pages/notFound";
import RegistrationUniversity from './pages/auth/registrationuniversity';
import DashboardLayout from './container/dashboardLayout';
import AllCompetences from './pages/competence/getall';

function App() {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);

  return (
    <Routes>
      {isAuth && (
        <>
          {user.role === "Ministry" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<NotFound />} />
              <Route path='competence'>
                <Route index element={<AllCompetences />} />
              </Route>
              <Route path="NotFound" element={<NotFound/>}/>
            </Route>
          )}
          {user.role === "University" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              {/* <Route index element={<NotFound />} /> */}
              <Route path="NotFound" element={<NotFound/>}/>
            </Route>
          )
          }
        </>
      )}
      
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/dashboard" element={<SignIn />} />
      <Route path='/registrationuniversity' element={<RegistrationUniversity/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
