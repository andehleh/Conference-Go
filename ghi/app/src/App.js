import Nav from "./Nav";
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";
import AttendConferenceForm from "./AttendConferenceForm";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <>
      <Nav />
      <div className="container">
        <AttendConferenceForm />
        {/* <ConferenceForm /> */}
        <LocationForm />
        {/* <AttendeesList attendees={props.attendees} /> */}
      </div>
    </>
  );
}

export default App;
