import React from 'react';
import { Background, Content, FormContainer, Title, Label, Logo, Input, ControlButtons, Button } from '../styles/teamFormStyles';
import def from '../assets/default.png';
import { MdPersonAdd } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

export const TeamFormPage: React.FC = () => {

    return <Background>
        <Logo src={def} alt="Logo" />
        <FormContainer>
            <Content>
                <ControlButtons>
                    <Button type="add">
                        <MdPersonAdd size={20} />
                    </Button>
                    <Button type="remove">
                        <MdPersonRemove size={20} />
                    </Button>
                    <Button type="navigate">
                        <MdNavigateBefore size={20} />
                    </Button>
                    <Button type="navigate">
                        <MdNavigateNext size={20} />
                    </Button>
                </ControlButtons>
                <Title>Jugadores</Title>
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" type="text" />
                <Label htmlFor="nickname">Nickname</Label>
                <Input id="nickname" type="text" />
                <Label htmlFor="epicName">Nombre epic</Label>
                <Input id="epicName" type="text" />
                <Label htmlFor="steamID">Steam ID</Label>
                <Input id="steamID" type="text" />
                <Label htmlFor="discordID">Discord ID</Label>
                <Input id="discordID" type="text" />
                <Label htmlFor="epicID">Epic ID</Label>
                <Input id="epicID" type="text" />
                <Label htmlFor="peak">Peak</Label>
                <Input id="peak" type="text" />
            </Content>
            <Content>
                hola
            </Content>
            <Content>
                hola
            </Content>
        </FormContainer>
    </Background>
};