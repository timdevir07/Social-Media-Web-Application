import React, { useState } from 'react';

const PasswordReset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNextClick = () => {
    if (password === confirmPassword) {
      alert('Passwords match. Proceeding to the next step.');
      // Add logic to handle the next step
    } else {
      alert('Passwords do not match. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Create a New Password</h2>
      <input
        type="password"
        placeholder="Create password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleNextClick} style={styles.button}>Next</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  input: {
    width: '300px',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
  },
  button: {
    width: '320px',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default PasswordReset;
