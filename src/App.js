import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Suspense } from "react";
import LoginForm from "./form/login/LoginForm";
import SignupForm from "./form/signup/SignUpForm";

//TODO: Create a signup form with 3 fields: username, password, and email. Include a bold header at the top saying 'Create Account', and below that, add a message asking if you already have an account, then invite users to log in. Finally, add a 'Signup' button using Tailwind or Bootstrap CSS to make it a visually appealing signup page.

function App() {
  return (
    <div className="App">
  
      {/* <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" component={<LoginForm />} />
            <Route path="/signup" component={<SignupForm />} />
          </Routes>
        </BrowserRouter>
      </Suspense> */}
      {/* <Route path="/movie/:id" component={MovieDetailsPage} /> */}
    </div>
  );
}

export default App;
