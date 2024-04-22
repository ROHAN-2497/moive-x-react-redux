import { useEffect } from "react";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getApiConfigaration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/person/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfigaration(res));
    });
  };

  return (
    <>
      app <br />
      pages: {url?.total_pages}
    </>
  );
}

export default App;
