// import logo from './logo.svg';
// import { useState } from 'react';
// import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)

  }
  const removeBodyClasses=()=>{
    document.body.vlassList.remove('bg-light')
    document.body.vlassList.remove('bg-dark')
    document.body.vlassList.remove('bg-warning')
    document.body.vlassList.remove('bg-danger')
    document.body.vlassList.remove('bg-success')
    // document.body.vlassList.remove()
    // document.body.vlassList.remove(bg-ligh)
    // document.body.vlassList.remove(bg-ligh)
  }
  const toggleMode = (cls) => {
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2d2929';
      showAlert("Dark mode has been enable", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "success")
    }


  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Try TextUtils-Wordcounter , Charecter Counter,remove extra space" mode={mode} />

            </Route>
          </Switch>

        </div >


      </Router>
    </>


  );
}

export default App;
