import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {Container, List} from "semantic-ui-react";
import {Activity} from "../../models/Activity";
import NarBar from "./NarBar";
import ActivitityDashBoard from "../../features/activities/dashboard/ActivitityDashBoard";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [activities, setActivites] = useState<Activity[]>([])
    const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
    const [editMode, setEditMode] = useState(false)
  useEffect(() => {
    axios.get<Activity[]>("https://localhost:44371/api/Activities").then(res => {
      console.log(res.data)
      setActivites(res.data)
    });
  },[])

    function handleSelectedActivity(id:string){
      setSelectedActivity(activities.find(x => x.id === id));
    }
    function handleCancelSelectedActivity(){
      setSelectedActivity(undefined);
      console.log(true)
    }

    function handleFormOpen(id?: string){
      id?handleSelectedActivity(id):handleCancelSelectedActivity();
      setEditMode(true);
    }

    function handleFormClose(){
      setEditMode(false);
    }
    function handleCreateOrEditActivity(activity: Activity){
      var isEdit:boolean = !!activity.id;
    if (isEdit) {
        setActivites([...activities.filter(x => x.id !== activity.id), activity])
      } else {
        setActivites([...activities, {...activity, id: uuidv4()}])
      }
    setEditMode(false)
      setSelectedActivity(activity)
    }

    function handleDeleteActivity(id: string){
      setActivites([...activities.filter(x => x.id!==id)])
    }
  return (
      <>
          <NarBar openForm={handleFormOpen}/>
          <Container style={{marginTop: '7em'}}>
              <ActivitityDashBoard activities={activities}
                                   selectedActivity={selectedActivity}
                                   selectActivity={handleSelectedActivity}
                                   cancelSelectActivity={handleCancelSelectedActivity}
                                   editMode={editMode}
                                   openForm={handleFormOpen}
                                   closeFrom={handleFormClose}
                                   createOrEditActivity={handleCreateOrEditActivity}
                                   handleDeleteActivity={handleDeleteActivity}
              />
          </Container>
      </>
  );
}

export default App;
