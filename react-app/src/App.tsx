import ListGroup from "./components/ListGroup";

function App() {
    let items = [
      'New York',
      'India',
      'Hyderabad',
      'London',
      'Eluru'
    ];

    const handelSelectedItem = (item: string) => {
      console.log(item);
    }
    
  return <div>
      <ListGroup items={items} heading={"Cities"} onSelectItem={handelSelectedItem}/>
    </div>
};

export default App;