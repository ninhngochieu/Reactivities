import {Button, Item, Label, Segment, SegmentGroup} from "semantic-ui-react";
import {Activity} from "../../../models/Activity";

interface Props {
    activities: Activity[],
    selectActivity: (id: string) => void,
    handleDeleteActivity: (id: string) => void
}

export default function ActivityList({activities, selectActivity, handleDeleteActivity}: Props){
    return(
        <Segment>
            <Item.Group divided={true}>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as={'a'}>
                                {activity.title}
                            </Item.Header>
                            <Item.Meta>
                                {activity.date}
                            </Item.Meta>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city},{activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated={'right'} content={'View'} color={'blue'}></Button>
                                <Button onClick={() => handleDeleteActivity(activity.id)} floated={'right'} content={'Delete'} color={'red'}></Button>
                                <Label basic={true} content={activity.category}></Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}