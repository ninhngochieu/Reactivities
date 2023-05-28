import {Grid, List} from "semantic-ui-react";
import {Activity} from "../../../models/Activity";
import React from "react";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../forms/ActivityForm";

interface Props {
    activities: Activity[],
    selectedActivity: Activity | undefined,
    selectActivity: (id: string) => void,
    cancelSelectActivity: () => void,
    editMode: boolean,
    openForm:(id: string) => void,
    closeFrom:() => void,
    createOrEditActivity: (activity: Activity) => void
    handleDeleteActivity: (id: string) => void
}

// export default function ActivitityDashBoard(props: Props){
export default function ActivitityDashBoard({activities, selectedActivity, cancelSelectActivity, selectActivity, editMode, openForm, closeFrom, createOrEditActivity, handleDeleteActivity}: Props){
    return (
        <Grid>
            <Grid.Column width={10}>
            <ActivityList handleDeleteActivity={handleDeleteActivity} activities={activities} selectActivity={selectActivity}></ActivityList>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && <ActivityDetail activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} openFrom={openForm}></ActivityDetail>}
                {editMode && <ActivityForm closeFrom={closeFrom} selectedActivity={selectedActivity} createOrEditActivity={createOrEditActivity}></ActivityForm>}
            </Grid.Column>
        </Grid>
    )
}