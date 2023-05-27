import {Grid, List} from "semantic-ui-react";
import {Activity} from "../../../models/Activity";
import React from "react";

interface Props {
    activities: Activity[]
}

// export default function ActivitityDashBoard(props: Props){
export default function ActivitityDashBoard({activities}: Props){
    return (
        <Grid>
            <Grid.Column width={10}>
                <List>
                    {
                        activities.map((act: Activity) => (
                            <List.Item key={act.id}>{act.title}</List.Item>
                        ))
                    }
                </List>
            </Grid.Column>
        </Grid>
    )
}