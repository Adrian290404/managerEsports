import React, { useRef, useState } from 'react';
import { Background, Content, FormContainer, Title, Logo, ControlButtons, Button, Form, Current, FormHeader, FormFooter, CurrentSelect, UpControls, BackIcon, Label, Input, LogoContainer, HiddenInput } from '../styles/teamFormStyles';
import def from '../assets/default.png';
import { MdPersonAdd } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { PlayerForm } from '../components/playerForm';
import { toast } from 'react-toastify';
import { AddButton } from '../styles/teamSelectStyles';
import back from '../assets/Back.gif';
import { Link } from 'react-router-dom';
import { StaffForm } from '../components/staffForm';

export const TeamFormPage: React.FC = () => {
    const [playerForms, setPlayerForms] = useState(
        [ { playerName: '', playerNickname: '', playerEpicname: '', playerEpicID: '', playerSteamID: '', playerDiscordID: '', playerPeak: '' } ]
    );
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [staffForms, setStaffForms] = useState(
        [ { staffName: '', staffAge: '', staffEmail: '', staffTelephone: '', staffDiscordID: '' }, { staffName: '', staffAge: '', staffEmail: '', staffTelephone: '', staffDiscordID: '' }, { staffName: '', staffAge: '', staffEmail: '', staffTelephone: '', staffDiscordID: '' }]
    );
    const [staff, setStaff] = useState(0);
    const [logoSrc, setLogoSrc] = useState(def);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const addPlayer = () => {
        if (playerForms.length < 4) {
            setPlayerForms([
                ...playerForms,
                { playerName: '', playerNickname: '', playerEpicname: '', playerEpicID: '', playerSteamID: '', playerDiscordID: '', playerPeak: '' }
            ]);
            setCurrentPlayer(playerForms.length);
            toast.success("Nuevo formulario para jugador añadido.");
        } 
        else {
            toast.error("No puedes añadir más jugadores.");
        }
    };

    const removePlayer = () => {
        if (playerForms.length > 1) {
            const updated = playerForms.slice(0, -1);
            setPlayerForms(updated);
            setCurrentPlayer(cp => Math.min(cp, updated.length - 1));
            toast.success("Último jugador eliminado.");
        } 
        else {
            toast.error("Siempre debe quedar al menos uno.");
        }
    };

    const nextPlayer = () => {
        setCurrentPlayer(cp => Math.min(cp + 1, playerForms.length - 1));
    }

    const previousPlayer = () => {
        setCurrentPlayer(cp => Math.max(cp - 1, 0));
    }

    const staffList: Record<number, string> = {
        0: "CEO",
        1: "Manager",
        2: "Coach"
    };

    const nextStaff = () => {
        if (staff < 2) {
            setStaff(staff + 1);
        }
    };

    const previousStaff = () => {
        if (staff > 0) {
            setStaff(staff - 1);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
        if (typeof reader.result === 'string') {
            setLogoSrc(reader.result);
        }
        };
        reader.readAsDataURL(file);
    };

    return (
        <Background>
            <UpControls>
                <Link to="/select-team">
                    <BackIcon src={back} alt="backIcon" />
                </Link>
                <LogoContainer>
                    <Logo src={logoSrc} alt="Logo del equipo" onClick={handleClick} />
                    <HiddenInput
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                    />
                </LogoContainer>
                <AddButton>+</AddButton>
            </UpControls>
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
                        <FormHeader>
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

                        <StaffForm
                            form={staffForms[staff]}
                            setForm={updated => {
                                setStaffForms(forms =>
                                    forms.map((f,i) => i === staff ? updated : f)
                                );
                            }}
                        />
                       
                    </Content> 
                </Form>
                <Form>
                    <Title>Equipo</Title>
                    <Content>
                        <FormHeader>
                            <Current>
                                Información del equipo
                            </Current>
                        </FormHeader>
                        
                        <div>
                            <Label htmlFor="teamName">Nombre del equipo</Label>
                            <Input id="teamName" name="teamName"/>
                            <Label htmlFor="twitch">Twitch <FaTwitch size={15} color={"#9146FF"} /></Label>
                            <Input id="twitch" name="twitch"/>
                            <Label htmlFor="youtube">Youtube <FaYoutube size={15} color={"#FF0000"} /></Label>
                            <Input id="youtube" name="youtube"/>
                            <Label htmlFor="twitter">Twitter <FaTwitter size={15} color={"#1DA1F2"} /></Label>
                            <Input id="twitter" name="twitter"/>
                            <Label htmlFor="instagram">Instagram <FaInstagram size={15} color={"#C1358"} /></Label>
                            <Input id="instagram" name="instagram"/>
                        </div>
                    </Content>
                </Form>
            </FormContainer>
        </Background>
    );
};