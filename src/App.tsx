import { useState } from "react";
import { ListGroup, Alert, Button, Like } from "./components";
import "./App.css";

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
        <Like onClick={() => console.log("clicked")} />
      </div>
    </>
  );
}

export default App;
