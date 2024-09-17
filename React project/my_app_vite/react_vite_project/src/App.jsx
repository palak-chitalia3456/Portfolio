// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Mycomponent from "./components/Mycomponent";
import Mycomponent2 from "./components/Mycomponent2";
import Mycomponent3 from "./components/Mycomponent3";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Mycomponent /> <Mycomponent2 /> <Mycomponent3/>
    </div>
  );
  // (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App;

//the above thing is completely known as a component i.e a function and inside function there is a html code
//and components are different section of an application
//and components can be of different types like profile(where we store profile information),add something,contact us etc..
