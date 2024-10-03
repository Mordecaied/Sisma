import React, { useState } from 'react';

function App() {
  const [passwords, setPasswords] = useState([]);
  const [newPassword, setNewPassword] = useState({ website: '', username: '', password: '' });

  const handleInputChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswords([...passwords, newPassword]);
    setNewPassword({ website: '', username: '', password: '' });
  };

  return (
    <div className="App">
      <h1>Sisma: Secure Password Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="website"
          value={newPassword.website}
          onChange={handleInputChange}
          placeholder="Website"
          required
        />
        <input
          type="text"
          name="username"
          value={newPassword.username}
          onChange={handleInputChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={newPassword.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button type="submit">Add Password</button>
      </form>
      <ul>
        {passwords.map((pw, index) => (
          <li key={index}>
            {pw.website}: {pw.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;