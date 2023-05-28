import {Button, Form, Segment} from "semantic-ui-react";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {Activity} from "../../../models/Activity";
import {ChangeEvent, useState} from "react";

interface Props {
    closeFrom: () => void;
    selectedActivity: Activity | undefined;
    createOrEditActivity: (activity: Activity) => void
}

export default function ActivityForm({selectedActivity, closeFrom, createOrEditActivity}: Props){
    const initialState: Activity = selectedActivity ?? {
        id: '',
        title:'',
        category:'',
        description: '',
        date: '',
        city: '',
        venue: ''
    }
    const [activityInForm,setActivityInForm] = useState(initialState)

    function handleSubmit(){
        createOrEditActivity(activityInForm);
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = e.target
        //custom for various type of input
        //Immutation
        setActivityInForm({...activityInForm, [name]: value})
    }

    return (
        <Segment clearing={true}>
            <Form onSubmit={handleSubmit} autoComplete={'off'}>
                <Form.Input placeholder={'Title'} name={'title'} value={activityInForm.title} onChange={handleInputChange}></Form.Input>
                <Form.TextArea placeholder={'Description'} name={'description'} value={activityInForm.description} onChange={handleInputChange}></Form.TextArea>
                <Form.Input placeholder={'Category'} name={'category'} value={activityInForm.category} onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder={'Date'} name={'date'} value={activityInForm.date} onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder={'City'} name={'city'} value={activityInForm.city} onChange={handleInputChange}></Form.Input>
                <Form.Input placeholder={'Venue'} name={'venue'} value={activityInForm.venue} onChange={handleInputChange}></Form.Input>
                <Button floated={'right'} positive={true} type={"submit"} content={"Submit"}></Button>
                <Button onClick={closeFrom} floated={'right'} type={"button"} content={"Cancel"}></Button>
            </Form>
        </Segment>
    )
}