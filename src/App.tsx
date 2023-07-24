import { useState } from "react";
import { ListGroup, Alert, Button } from "./components";
import "./App.css";
import { BsCalendarDate } from "react-icons/bs";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleClickButton = (name: string, alertState: boolean) => {
    console.log(name);
    setAlertVisible(alertState);
  };

  return (
    <>
      {alertVisible && (
        <Alert onClose={handleClickButton}>Button Clicked!</Alert>
      )}
      <Button onClick={handleClickButton}>My Button</Button>
      <ListGroup
        items={["Tokyo", "Paris", "New York"]}
        heading={"Cities"}
        onSelectItem={(item) => console.log(item)}
      ></ListGroup>
      <div>
        <BsCalendarDate color="blue" />
      </div>
    </>
  );
}

export default App;
