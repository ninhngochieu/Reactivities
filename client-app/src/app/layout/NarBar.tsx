import {Button, Container, Menu, MenuItem} from "semantic-ui-react";

export default function NarBar(){
    return(
        <Menu inverted fixed={'top'}>
            <Container>
                <Menu.Item header>
                    <img src="/asset/logo.png" alt="logo" style={{marginRight: "10px", }}/>Reactivities
                </Menu.Item>
                <Menu.Item name={'Activities'}/>
                <Menu.Item>
                    <Button positive content={'Create Activity'}></Button>
                </Menu.Item>
            </Container>
        </Menu>
    );
}