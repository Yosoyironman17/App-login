import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import './index.css'; // Asegúrate de que este archivo esté importado

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {showLogin ? (
        <>
          <Login />
          <button
            onClick={() => setShowLogin(false)}
            className="mt-4 text-blue-500 hover:underline"
          >
            ¿Ya tienes una cuenta? Iniciar sesión aquí.
          </button>
        </>
      ) : (
        <>
          <Register />
          <button
            onClick={handleLoginClick}
            className="mt-4 text-blue-500 hover:underline"
          >
            ¿Ya tienes una cuenta? Iniciar sesión aquí.
          </button>
        </>
      )}
    </div>
  );
};

export default App;
