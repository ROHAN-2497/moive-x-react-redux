import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/person/popular").then((res) => {
      console.log(res);
    });
  };

  return <>app</>;
}

export default App;
