import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Container, List} from "semantic-ui-react";
import {Activity} from "../../models/Activity";
import NarBar from "./NarBar";


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
      <>
          <NarBar/>
          <Container style={{marginTop: '7em'}}>
            <List>
              {
                activities.map((act: Activity) => (
                    <List.Item onClick={() => removeActivity(act.id)} key={act.id}>{act.title}</List.Item>
                ))
              }
            </List>
          </Container>
      </>
  );
}

export default App;
