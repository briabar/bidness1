import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import BusinessGeneratorPage from '../BusinessGeneratorPage/BusinessGeneratorPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import FeaturedPage from "../FeaturedPage/FeaturedPage";
import userService from "../../utils/userService";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if (user) {
    return (
      <Routes>
        <Route path="/" element={<FeaturedPage user={user} handleLogout={handleLogout} />} />
        <Route
          path="/login"
          element={<LoginPage user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/signup"
          element={<SignupPage user={user} handleSignUpOrLogin={handleSignUpOrLogin} handleLogout={handleLogout}/>}
        />
        <Route
          path="/businessgenerator"
          element={<BusinessGeneratorPage user={user} handleLogout={handleLogout}/>}
        />
        <Route path="/:username" element={<ProfilePage user={user} handleLogout={handleLogout} />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {/* <Route path="/" element={<FeaturedPage />} /> */}
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      {/* <Route
        path="/businessgenerator"
        element={<BusinessGeneratorPage />}
      /> */}

      {/* <Route path="/:username" element={<ProfilePage user={user} handleLogout={handleLogout}  />} /> */}

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
