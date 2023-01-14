import User from "./components/data";
import Page from "./components/page";
import { useState } from "react";
import Head from "./components/head";
import Bottom from "./components/Clear";

function App() {
  const [data, setData] = useState(User);
  const totalBirthday = data.length;

  const removeSingle = (id) => {
    const filter = data.filter((value) => value.id !== id);
    setData(filter);
  };
  const removeAll = () => {
    const remove = [];
    setData(remove);
  };

  return (
    <div className="App">
      <Head birthday={totalBirthday} />
      {data.map((value, idx) => {
        return <Page id={idx} data={value} clear={removeSingle} />;
      })}
      <Bottom handlechange={removeAll} />
    </div>
  );
}

export default App;
