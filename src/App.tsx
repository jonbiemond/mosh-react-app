import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

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
    </>
  );
}

export default App;
