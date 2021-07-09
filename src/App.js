import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import GlobalStyle from "./components/UI/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";

const App = () => {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />

      <Switch location={location} key={location.pathname}>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/work" exact>
          <OurWork />
        </Route>
        <Route path="/work/:id">
          <MovieDetail />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
