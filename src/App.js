import React from 'react';
import FriendsList from './components/friendsList'
import Login from './components/login'
import ChatBox from './components/chatBox'

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  return (
    <div className="children">
      <Login />
      <div className="my-flex mb-3">
        <div className="d-flex justify-content-between children">
          <FriendsList />
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

/*
 */

export default App;
