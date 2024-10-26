import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import './index.css'; // Asegúrate de que este archivo esté importado

const App = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {showRegister ? (
        <Register />
      ) : (
        <>
          <Login />
          <button
            onClick={handleRegisterClick}
            className="mt-4 text-blue-500 hover:underline"
          >
            ¿No tienes una cuenta? Regístrate aquí.
          </button>
        </>
      )}
    </div>
  );
};

export default App;
