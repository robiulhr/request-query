import { useEffect, useState } from "react";
import "./App.css";
import requestQuery from "../../src/requestQuery";
import { PostDataType } from "./type";
import environment from "./environments";

function App() {
  const [data, setData] = useState<PostDataType | null>();
  const requestInstance = requestQuery.create({ baseURL: environment.baseUrl });
  const { response, error, loading, cancelRequest } = requestInstance.request({
    timeout: 3000,
    baseURL: environment.baseUrl,
    method: "get",
    url: "/posts",
    timeoutErrorMessage: "Timeout Error.",
  });
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
    console.log(error);
  }, [response, error]);
  return (
    <>
      <h1>Here is the response below:</h1>
      {data &&
        data.map((ele) => {
          return <div key={ele.title}>{ele.title}</div>;
        })}
      {console.log(data)}
      {loading && <h4>loading...</h4>}
      {error && <h6>something went wrong.</h6>}
    </>
  );
}

export default App;
