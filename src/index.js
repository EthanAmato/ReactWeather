import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './components/Weather'
import Navbar from './components/Navbar';
import { BrowserRouter as Router,
  Route,
  Routes,
  useLocation} from 'react-router-dom'; 


/*
Weather: 

at least three cities to choose from
Each city must have different weather
A weekly and daily view
The date 
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);

function MyRoutes(props) {
  return (
  <Router>
        <div>
          <Navbar />
          <Routes>
            <Route name="Home" exact path="/" element={<Weather/>}/>
            <Route name="About" path="/about" element={<Weather/>} />
            <Route name= "Login" path="/login" element={<Weather/>}/>
            <Route name= "LoggedIn" path="/loggedin" element={<Weather/>}/>
          </Routes>
        </div>
  </Router>
  );
}