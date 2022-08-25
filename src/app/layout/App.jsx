import React, {  } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";

// Can only return one element, need to have one root div / Fragment / empty tags
function App() {

  return (
    <BrowserRouter>
    <Route exact path="/" component={HomePage} />
    <Route path={'/(.+)'} render={() => (
      <><NavBar  />
      <Container className="main">
          
          <Route exact path="/events" component={EventDashboard} />
          <Route path="/events/:id" component={EventDetailedPage} />
          <Route path={["/createEvent", ]} component={EventForm} />
      </Container></>
      
    )} />
      
    </BrowserRouter>
  );
}

export default App;
