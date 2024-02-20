import React from 'react';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/signin";
import { useTypedSelector } from "./hooks/useTypedSelector";
import NotFound from "./pages/notFound";
import RegistrationUniversity from './pages/auth/registrationuniversity';
import DashboardLayout from './container/dashboardLayout';
import AllCompetences from './pages/competence/getall';
import UpdateCompetence from './pages/competence/update';
import CreateCompetence from './pages/competence/create';
import AllProgramLearningOutcomess from './pages/programLearningOutcomes/getall';
import CreateProgramLearningOutcomes from './pages/programLearningOutcomes/create';
import UpdateProgramLearningOutcomes from './pages/programLearningOutcomes/update';

function App() {
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);

  return (
    <Routes>
      {isAuth && (
        <>
          {user.role === "Ministry" && (
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<NotFound />} />

              {/* Competence / Компетенції */}
              <Route path='competence'>
                <Route index element={<AllCompetences />} />
                <Route path='getall' element={<AllCompetences />} />
                <Route path='update' element={<UpdateCompetence />} />
                <Route path='create' element={<CreateCompetence />} />
              </Route>

              {/* ProgramLearningOutcomes / Програмні результати навчання */}
              <Route path='programlearningoutcomes'>
                <Route index element={<AllProgramLearningOutcomess />} />
                <Route path='getall' element={<AllProgramLearningOutcomess />} />
                <Route path='update' element={<UpdateProgramLearningOutcomes />} />
                <Route path='create' element={<CreateProgramLearningOutcomes /> }/>
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
      <Route path="*" element={<SignIn />} />
    </Routes>
  );
}

export default App;
