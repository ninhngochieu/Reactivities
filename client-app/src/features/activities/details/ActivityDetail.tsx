import {Button, Card, Icon, Image} from "semantic-ui-react";
import {Activity} from "../../../models/Activity";

interface Props {
    activity: Activity
}

export default function ActivityDetail({activity}: Props){
    return(
        <Card fluid={true}>
            <Image src={`/asset/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button basic={true} color={'blue'} content={'Edit'}></Button>
                    <Button basic={true} color={'grey'} content={'Cancel'}></Button>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}