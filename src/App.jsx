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
  const [name, setName] = useState("Ali");
  const [fname, setFname] = useState("Ali");
  const [lname, setLname] = useState("");
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleButtonClick = () => {
    console.log("Button is clicked");

    setCount(count + 1);
    setName("AliA");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log(fname, lname);
  };

  const test = () => {
    const a = "test";
    return <h1>hbasdhvashd {a}</h1>;
  };

  return (
    <div className='card'>
      <button onClick={handleButtonClick}>count is {count}</button>
      {/*   <p>
        {test()}
        {name}
        <br />
        Edit <code>src/App.jsx</code> and save to test HMR
      </p> */}

      <h2>HTML Forms</h2>

      <form>
        <label for='fname'>First name:</label>
        <br />
        <input
          type='text'
          name='fname'
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          type='text'
          name='lname'
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <br />
        <input type='submit' value='Submit' onClick={handleFormSubmission} />
      </form>
    </div>
  );
};

export default App;
