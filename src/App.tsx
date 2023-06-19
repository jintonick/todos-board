import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Register from './components/registation';
import { AuthProvider } from './components/authprovider';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex justify-center">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/main/*" element={<Main />} /> 
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
