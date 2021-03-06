import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConfigEditor from './configEditor'

const config = {
  name: "john",
  surname: "snow",
  place: {
    city: "winterfell",
    weather: {
      isCold: true
    }
  },
  age: 34,
  isTargaryien: true,
  isStark: false,
  friends: ["tyrion", "arya"]
}

function App() {
  return (
    <div className="App">
      <ConfigEditor config={config}/>
    </div>
  );
}

export default App;
