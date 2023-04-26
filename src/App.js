import { useState, useEffect } from "react";
import { Form, Table } from "./components";

function App() {
  const dummy = [
    { firstName: "Virat", lastName: "Kohli", contact: "12345567890" },
    { firstName: "Sachin", lastName: "Tendulkar", contact: "0123456789" },
    { firstName: "MS", lastName: "Dhoni", contact: "9876543210" },
  ];
  console.log(JSON.parse(localStorage.getItem("easyops")));
  if (localStorage.getItem("easyops") == null) {
    localStorage.setItem("easyops", JSON.stringify({ data: dummy }));
  }
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("easyops")).data
  );

  useEffect(() => {
    localStorage.setItem("easyops", JSON.stringify({ data }));
  }, [data]);

  return (
    <div className="app">
      <Form data={data} setData={setData}></Form>
      <Table data={data} setData={setData}></Table>
    </div>
  );
}

export default App;
