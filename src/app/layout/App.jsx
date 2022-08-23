import React, {useState} from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventsDashboard/EventDashboard";
import NavBar from "../../features/events/nav/NavBar";

// Can only return one element, need to have one root div / Fragment / empty tags
function App() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <NavBar setFormOpen={setFormOpen}></NavBar>
      <Container className="main">
        <EventDashboard formOpen = {formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
