import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const handleClickButton = (name: string) => {
    console.log(name);
  };

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button onClick={handleClickButton}>My Button</Button>
    </div>
  );
}

export default App;
