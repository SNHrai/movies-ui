import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './form/login/LoginForm';
import SignUpForm from './form/signup/SignUpForm';

const Routing = () => {
 return (
    <Router>
      <Routes>
        <Route exact path="/" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        {/* <Route path="/movie/:id" component={MovieDetailsPage} /> */}
      </Routes>
    </Router>
 );
};

export default Routing;