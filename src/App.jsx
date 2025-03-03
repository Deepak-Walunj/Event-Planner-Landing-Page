import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventPlanner from './Components/EventPlanner'
import SocialEvents from './Components/SocialEvents.jsx'
import EntertainmentEvents from './Components/EntertainmentEvents.jsx'
import CommunityEvents from './Components/CommunityEvents.jsx'
import Features from './Components/Features.jsx'
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import { useState } from 'react';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLogin, setIsLogin] = useState(null);
  return (
    <div className='app-container'>
      {!isAuthenticated ? (
        <div className='auth-container'>
          {isLogin === null ? (
            <div>
              <button onClick={() => setIsLogin(true)}>
                Login
              </button>
              <button onClick={() => setIsLogin(false)}>
                Signup
              </button>
            </div>
          ) : (
            <div>
              {isLogin ? (<Login setIsAuthenticated={setIsAuthenticated} />) : (<Signup setIsAuthenticated={setIsAuthenticated} />)} 
              <button onClick={() => setIsLogin(null)}>
                Back to select Login/Signup
              </button>
            </div>
          )}
        </div>
      )  : 
      (
        // Once authenticated, show the EventPlanner page
        <Router>
          <Routes>
            <Route path="/" element={<EventPlanner />} />
            <Route path="/social-events" element={<SocialEvents />} />
            <Route path="/entertainment-events" element={<EntertainmentEvents />} />
            <Route path="/community-events" element={<CommunityEvents />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App
