import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/header/Header";
import Login from "./Pages/auth/Login";
import Register from "./Pages/auth/Register";
import Verify from "./Pages/auth/Verify";
import Footer from "./Components/footer/Footer";
import About from "./Pages/About/About";
import Account from "./Pages/Account/Account";
import { userData } from "./Context/UserContext";
import Loading from "./Components/Loading/Loading";
import Courses from "./Pages/courses/Courses";
import CourseDescription from "./Pages/CourseDescription/CourseDescription";
import PaymentSuccess from "./Pages/PaymentSuccess/PaymentSuccess";
import { Dashboard } from "./Pages/dashboard/Dashboard";
import CourseStudy from "./Pages/coursestudy/CourseStudy";
import Lecture from "./Pages/lecture/Lecture";
import AdminDashboard from "./admin/dashboard/AdminDashboard";
import AdminCourses from "./admin/courses/AdminCourses";
import AdminUser from "./admin/users/AdminUser";
import  {ForgotPassword}  from "./Pages/auth/ForgotPassword";
import  ResetPassword  from "./Pages/auth/ResetPassword";
import Playground from "./Pages/Playground/Playground";
import ProfessionalCareer from "./Pages/professionalCareer/ProfessionalCareer";


const App = () => {
  const { isAuth, user, loading } = userData();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header isAuth={isAuth} />
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/career" element={<ProfessionalCareer />} />


            <Route path="/courses" element={<Courses />} />
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route
              path="/register"
              element={isAuth ? <Home /> : <Register />}
            />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
             <Route path="/forgot" element={isAuth ? <Home /> : <ForgotPassword />} />
              <Route
              path="/reset-password/:token"
              element={isAuth ? <Home /> : <ResetPassword />}
            />
           
            <Route
              path="/course/:id"
              element={isAuth ? <CourseDescription user={user} /> : <Login />}
            />
            <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccess user={user}/> : <Login />}
            />
            <Route
              path="/:id/dashboard"
              element={isAuth ? <Dashboard user={user} /> : <Login />}
            />
             <Route
              path="/course/study/:id"
              element={isAuth ? <CourseStudy user={user} /> : <Login />}
            />
            <Route
              path="/lectures/:id"
              element={isAuth ? <Lecture user={user} /> : <Login />}
            />
              <Route
              path="/admin/dashboard"
              element={isAuth ? < AdminDashboard user={user} /> : <Login />}
            />
             <Route
              path="/admin/course"
              element={isAuth ? <AdminCourses user={user} /> : <Login />}
            />
            <Route
              path="/admin/users"
              element={isAuth ? <AdminUser user={user} /> : <Login />}
            />
            </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
