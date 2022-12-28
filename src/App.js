import React, { useState } from 'react';
import './App.css';
import Room from './Room';
import EnterForm from './EnterForm';

function App() {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");

  const changeAuth = (status, data) => {
    setAuth(status);
    setName(data);
  }

  return (   
    auth ? 
    <Room changeAuth={changeAuth} auctionName="Тестовые торги на аппарат ЛОТОС №2033564" participant={name} />
    : 
    <EnterForm enter={changeAuth} />
  );
}

export default App;