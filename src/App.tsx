import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Vancouver", "Toronto", "Calgary", "Montreal", "Tokyo"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
