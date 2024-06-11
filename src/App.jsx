import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      {/* <ImageSection />
      <Header /> */}
      <Counter />

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <DisplayCounter counter={counter} />
      <IncrementCounter setCounter={setCounter} />
    </>
  );
};

const DisplayCounter = ({ counter }) => {
  return <>{counter}</>;
};

const IncrementCounter = ({ setCounter }) => {
  return (
    <button onClick={() => setCounter((previous) => previous + 1)}>Add</button>
  );
};

export default App;
