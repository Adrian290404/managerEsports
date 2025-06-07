import React from 'react';
import { Background, Content, FormContainer, Title, Logo, ControlButtons, Button, Form, Current, FormHeader, FormFooter } from '../styles/teamFormStyles';
import def from '../assets/default.png';
import { MdPersonAdd } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { PlayerForm } from '../components/playerForm';

export const TeamFormPage: React.FC = () => {

    return <Background>
        <Logo src={def} alt="Logo" />
        <FormContainer>
            <Form>

                <Title>Jugadores</Title>
                <Content>

                    <FormHeader>
                        <Current>Jugador 1</Current>
                        <ControlButtons>
                            <Button type="add">
                                <MdPersonAdd size={15} />
                            </Button>
                            <Button type="remove">
                                <MdPersonRemove size={15} />
                            </Button>
                            <Button type="navigate">
                                <MdNavigateBefore size={15} />
                            </Button>
                            <Button type="navigate">
                                <MdNavigateNext size={15} />
                            </Button>
                        </ControlButtons>                        
                    </FormHeader>

                    <PlayerForm player={1}></PlayerForm>

                    <FormFooter>1 / 1</FormFooter>

                </Content>

            </Form>
            
            <Form>
                <Content>
                    hola
                </Content>                
            </Form>
            <Form>
                <Content>
                    hola
                </Content>                
            </Form>
        </FormContainer>
    </Background>
};