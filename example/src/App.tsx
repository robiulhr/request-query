import { useEffect, useState } from "react";
import "./App.css";
import { useRequestQuery } from "../../src/requestQuery";
import { PostDataType } from "./type";
import environment from "./environments";

function App() {
  const [data, setData] = useState<PostDataType | null>();
  const { response, error, loading, cancelRequest } = useRequestQuery<PostDataType>({
    timeout: 3000,
    baseURL: environment.baseUrl,
    method: "post",
    url: "/posts",
    timeoutErrorMessage: "Timeout Error.",
    headers: { accept: "*/*" },
    data: {
      userId: 1,
      id: 19392,
      title: "title",
      body: "Sample text",
    },
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
      {/* {data &&
        data.map((ele) => {
          return <div key={ele.title}>{ele.title}</div>;
        })} */}
      {console.log(data)}
      {loading && <h4>loading...</h4>}
      {error && <h6>something went wrong.</h6>}
    </>
  );
}

export default App;
