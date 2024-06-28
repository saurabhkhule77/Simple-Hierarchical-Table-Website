import { useEffect, useState } from "react";
import "./App.css";
import tableContex from "./Context/tableContext";
import Table from "./Components/Table";

function App() {
  const [data, setData] = useState(null);
  async function fetchData() {
    const res = await fetch("/db.json");
    const data = await res.json();
    setData(data?.rows);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <tableContex.Provider value={{ data }}>
      <Table />
    </tableContex.Provider>
  );
}

export default App;
