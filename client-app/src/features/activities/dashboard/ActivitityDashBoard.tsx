import {Grid, List} from "semantic-ui-react";
import {Activity} from "../../../models/Activity";
import React from "react";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[]
}

// export default function ActivitityDashBoard(props: Props){
export default function ActivitityDashBoard({activities}: Props){
    return (
        <Grid>
            <Grid.Column width={10}>
            <ActivityList activities={activities}></ActivityList>
            </Grid.Column>
        </Grid>
    )
}