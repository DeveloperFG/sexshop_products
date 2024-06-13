import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import "./App.css";
import Routes from "./routes";
import loading from './img/Iperium.gif'



function App() {


  const [load, setLoad] = useState(true)


  function Loading() {
    setLoad(false)
  }

  setTimeout(Loading, 4000)

  return (
    <div className="App">
      <div className='containerLoad'>

        {load ? (
          <img className='imgLoad' src={loading} />
        ) : <Routes />}

      </div>

      <ToastContainer autoClose={1600} />
    </div>
  );
}

export default App;
