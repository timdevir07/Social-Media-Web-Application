import React, { useState } from 'react';
import './App.css';

function App() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');

  const handleResetPassword = () => {
    // Handle the reset password logic here
    alert(`Password reset link sent to: ${usernameOrEmail}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Forgot Password</h1>
        <div className="form-container">
          <input
            type="text"
            placeholder="Enter username or email"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      </header>
    </div>
  );
}

export default App;
