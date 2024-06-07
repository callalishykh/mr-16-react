import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <ImageSection />
      <Header />
      <Counter />

      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const ImageSection = () => {
  return (
    <div>
      {" "}
      <a href='https://vitejs.dev' target='_blank'>
        <img src={viteLogo} className='logo' alt='Vite logo' />
      </a>
      <a href='https://react.dev' target='_blank'>
        <img src={reactLogo} className='logo react' alt='React logo' />
      </a>
    </div>
  );
};

const Header = () => {
  return <h1>Vite + React</h1>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => console.log("Button is clicked");

  const test = () => {
    const a = "test";
    return <h1>hbasdhvashd {a}</h1>;
  };

  return (
    <div className='card'>
      <button onClick={handleButtonClick}>count is {count}</button>
      <p>
        {test()}
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div>
  );
};

export default App;
