// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';
import TodoApp from './components/TodoApp';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <TodoApp user={user} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;

