import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link,Routes,Route} from 'react-router-dom';
import TutorialsList from './components/TutorialsList';
import AddTutorial from './components/AddTutorial';
import Tutorial from './components/Tutorial';


const App: React.FC =  ()=>{

  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/tutorials" className="navbar-brand">
        Tutorial List
      </a>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/tutorials"} className="nav-link">
            Tutorials
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>
      </div>
    </nav>
    <div className='container mt-3'>
      <Routes>
        <Route path = "/" element = {<TutorialsList/>} />
        <Route path="/tutorials" element={<TutorialsList/>} />
        <Route path="/add" element={<AddTutorial/>} />
        <Route path="/tutorials/:id" element={<Tutorial/>} />




      </Routes>

    </div>
    </div>
  )

}

export default App;