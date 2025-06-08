import React, { useState } from 'react';
import { Background, Content, FormContainer, Title, Logo, ControlButtons, Button, Form, Current, FormHeader, FormFooter } from '../styles/teamFormStyles';
import def from '../assets/default.png';
import { MdPersonAdd } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { PlayerForm } from '../components/playerForm';
import { toast } from 'react-toastify';

export const TeamFormPage: React.FC = () => {
    const [players, setPlayers] = useState(1);
    const [currentPlayer, setCurrentPlayer] = useState(1);

    const [form, setForm] = useState<{ [key: string]: string }>({
        nombre1: "", nickname1: "", epicname1: "", epicID1: "", steamID1: "", discordID1: "", peak1: "",
        nombre2: "", nickname2: "", epicname2: "", epicID2: "", steamID2: "", discordID2: "", peak2: "",
        nombre3: "", nickname3: "", epicname3: "", epicID3: "", steamID3: "", discordID3: "", peak3: "",
        nombre4: "", nickname4: "", epicname4: "", epicID4: "", steamID4: "", discordID4: "", peak4: "",
    });

    const clearPlayerForm = (playerNum: number) => {
        const updatedForm = { ...form };
            updatedForm[`nombre${playerNum}`] = "";
            updatedForm[`nickname${playerNum}`] = "";
            updatedForm[`epicname${playerNum}`] = "";
            updatedForm[`epicID${playerNum}`] = "";
            updatedForm[`steamID${playerNum}`] = "";
            updatedForm[`discordID${playerNum}`] = "";
            updatedForm[`peak${playerNum}`] = "";
        setForm(updatedForm);
    };

    const addPlayer = () => {
        if (players < 4) {
            setPlayers(players + 1);
            toast.success("Nuevo formulario para jugador añadido.");
        } 
        else {
            toast.error("No puedes añadir más jugadores.");
        }
    };

    const removePlayer = () => {
        if (players > 1) {
            clearPlayerForm(players);
            if (currentPlayer === players) {
                setCurrentPlayer(currentPlayer - 1);
            }
            setPlayers(players - 1);
            toast.success("Último jugador eliminado.");
        } 
        else {
            toast.error("No puedes eliminar más jugadores.");
        }
    };

    const nextPlayer = () => {
        if (currentPlayer < players) {
            setCurrentPlayer(currentPlayer + 1);
        }
    };

    const previousPlayer = () => {
        if (currentPlayer > 1) {
            setCurrentPlayer(currentPlayer - 1);
        }
    };

    return (
        <Background>
            <Logo src={def} alt="Logo" />
            <FormContainer>
                <Form>
                    <Title>Jugadores</Title>
                    <Content>
                        <FormHeader>
                            <Current>Jugador {currentPlayer}</Current>
                            <ControlButtons>
                                <Button type="add" onClick={addPlayer}>
                                    <MdPersonAdd size={15} />
                                </Button>
                                <Button type="remove" onClick={removePlayer}>
                                    <MdPersonRemove size={15} />
                                </Button>
                                <Button type="navigate" onClick={previousPlayer}>
                                    <MdNavigateBefore size={15} />
                                </Button>
                                <Button type="navigate" onClick={nextPlayer}>
                                    <MdNavigateNext size={15} />
                                </Button>
                            </ControlButtons>
                        </FormHeader>

                        <PlayerForm
                            player={currentPlayer}
                            current={true}
                            form={form}
                            setForm={setForm}
                        />

                        <FormFooter>{currentPlayer} / {players}</FormFooter>
                    </Content>
                </Form>

                <Form>
                    <Content>Formulario 2 aquí</Content>
                </Form>
                <Form>
                    <Content>Formulario 3 aquí</Content>
                </Form>
            </FormContainer>
        </Background>
    );
};