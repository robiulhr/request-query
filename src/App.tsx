import { useEffect, useState } from "react";
import "./App.css";
import { useAxios } from "./useAxios";
function App() {
  const [data, setData] = useState();
  const { response, error, loading } = useAxios({
    method: "post",
    url: "/posts",
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
  }, [response]);
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
