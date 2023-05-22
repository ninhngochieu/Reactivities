import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
  city: string;
  venue: string;
}

function App() {

  const [activities, setActivites] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>("https://localhost:44371/api/Activities").then(res => {
      console.log(res.data)
      setActivites(res.data)
    });
  },[])

  function removeActivity(id: string) {
    setActivites(activities.filter(x => x.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {
            activities.map((act: Activity) => (
                <li onClick={() => removeActivity(act.id)} key={act.id}>{act.title}</li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
