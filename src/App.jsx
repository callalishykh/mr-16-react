import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [pro, setPro] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setPro(res.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("App is mounted");
    getData();
  }, []);
  return (
    <>
      {/* <ImageSection />
      <Header /> */}

      {pro.map((ele) => (
        <h1>{ele.name}</h1>
      ))}
      <Counter />

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Counter Updated: ", counter);
  }, [counter]);
  return (
    <>
      <DisplayCounter counter={counter} />
      <IncrementCounter setCounter={setCounter} counter={counter} />
    </>
  );
};

const DisplayCounter = ({ counter }) => {
  return <>{counter}</>;
};

const IncrementCounter = ({ setCounter, counter }) => {
  return (
    <button
      onClick={() => {
        setCounter((previous) => previous + 1);
        console.log("counter: ", counter);
      }}
    >
      Add
    </button>
  );
};

export default App;
