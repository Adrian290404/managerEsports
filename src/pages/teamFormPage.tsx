import React, { useState } from 'react';
import { Background, Content, FormContainer, Title, Logo, ControlButtons, Button, Form, Current, FormHeader, FormFooter, CurrentSelect, UpControls, BackIcon } from '../styles/teamFormStyles';
import def from '../assets/default.png';
import { MdPersonAdd } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { PlayerForm } from '../components/playerForm';
import { toast } from 'react-toastify';
import { AddButton } from '../styles/teamSelectStyles';
import back from '../assets/Back.gif';
import { Link } from 'react-router-dom';

export const TeamFormPage: React.FC = () => {
  // 1) Array dinámico de formularios de jugador
  const [playerForms, setPlayerForms] = useState(
    [ { name: '', nickname: '', epicname: '', epicID: '', steamID: '', discordID: '', peak: '' } ]
  );
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const addPlayer = () => {
    if (playerForms.length < 4) {
      setPlayerForms([
        ...playerForms,
        { name: '', nickname: '', epicname: '', epicID: '', steamID: '', discordID: '', peak: '' }
      ]);
      setCurrentPlayer(playerForms.length);      // saltamos al nuevo
      toast.success("Nuevo formulario para jugador añadido.");
    } else {
      toast.error("No puedes añadir más jugadores.");
    }
  };

  const removePlayer = () => {
    if (playerForms.length > 1) {
      const updated = playerForms.slice(0, -1);
      setPlayerForms(updated);
      setCurrentPlayer(cp => Math.min(cp, updated.length - 1));
      toast.success("Último jugador eliminado.");
    } else {
      toast.error("Siempre debe quedar al menos uno.");
    }
  };

  const nextPlayer = () =>
    setCurrentPlayer(cp => Math.min(cp + 1, playerForms.length - 1));
  const previousPlayer = () =>
    setCurrentPlayer(cp => Math.max(cp - 1, 0));

  return (
    <Background>
      <FormContainer>
        <Form>
          <Title>Jugadores</Title>
          <Content>
            <FormHeader>
              <Current>Jugador {currentPlayer + 1}</Current>
              <ControlButtons>
                <Button type="add" onClick={addPlayer}><MdPersonAdd size={15}/></Button>
                <Button type="remove" onClick={removePlayer}><MdPersonRemove size={15}/></Button>
                <Button type="navigate" onClick={previousPlayer}><MdNavigateBefore size={15}/></Button>
                <Button type="navigate" onClick={nextPlayer}><MdNavigateNext size={15}/></Button>
              </ControlButtons>
            </FormHeader>

            <PlayerForm
              form={playerForms[currentPlayer]}
              setForm={updated => {
                setPlayerForms(forms =>
                  forms.map((f,i) => i === currentPlayer ? updated : f)
                );
              }}
            />

            <FormFooter>
              {currentPlayer + 1} / {playerForms.length}
            </FormFooter>
          </Content>
        </Form>

                <Form>
                    <Title>Staff</Title>
                    <Content>
                        {/* <FormHeader>
                            <Current>
                                {staffList[staff]}
                            </Current>
                            <ControlButtons>
                                <Button type="navigate" onClick={previousStaff}>
                                    <MdNavigateBefore size={15} />
                                </Button>
                                <Button type="navigate" onClick={nextStaff}>
                                    <MdNavigateNext size={15} />
                                </Button>
                            </ControlButtons>
                        </FormHeader>
                        */}
                    </Content> 
                </Form>
                <Form>
                    <Content>Formulario 3 aquí</Content>
                </Form>
            </FormContainer>
        </Background>
    );
};