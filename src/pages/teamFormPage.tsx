import React, { useRef, useState } from 'react';
import { Background, Content, FormContainer, Title, Logo, ControlButtons, Button, Form, Current, FormHeader, FormFooter, UpControls, BackIcon, Label, Input, LogoContainer, HiddenInput, Select } from '../styles/teamFormStyles';
import def from '../assets/default.png';
import { MdPersonAdd } from "react-icons/md";
import { MdPersonRemove } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import { FaInstagram, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { PlayerForm } from '../components/form/playerForm';
import { toast } from 'react-toastify';
import { AddButton } from '../styles/teamSelectStyles';
import back from '../assets/Back.gif';
import { Link } from 'react-router-dom';
import { StaffForm } from '../components/form/staffForm';

export const TeamFormPage: React.FC = () => {
    const [playerForms, setPlayerForms] = useState([{ playerName: '', playerNickname: '', playerEpicname: '', playerEpicID: '', playerSteamID: '', playerDiscordID: '', playerPeak: '' }]);
    const [currentPlayer, setCurrentPlayer] = useState(0);
    const [staffForms, setStaffForms] = useState([{ staffName: '', staffAge: '', staffEmail: '', staffTelephone: '', staffDiscordID: '' }, { staffName: '', staffAge: '', staffEmail: '', staffTelephone: '', staffDiscordID: '' }, { staffName: '', staffAge: '', staffEmail: '', staffTelephone: '', staffDiscordID: '' }]);
    const [staff, setStaff] = useState(0);
    const [logoSrc, setLogoSrc] = useState(def);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [navColor, setNavColor] = useState("#B71C1C");

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setNavColor(e.target.value);
    };

    const addPlayer = () => {
        if (playerForms.length < 4) {
            setPlayerForms([
                ...playerForms,
                { playerName: '', playerNickname: '', playerEpicname: '', playerEpicID: '', playerSteamID: '', playerDiscordID: '', playerPeak: '' }
            ]);
            setCurrentPlayer(playerForms.length);
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

    const nextPlayer = () => {
        setCurrentPlayer(cp => Math.min(cp + 1, playerForms.length - 1));
    };

    const previousPlayer = () => {
        setCurrentPlayer(cp => Math.max(cp - 1, 0));
    };

    const staffList: Record<number, string> = {
        0: "CEO",
        1: "Manager",
        2: "Coach"
    };

    const nextStaff = () => {
        if (staff < 2) setStaff(staff + 1);
    };

    const previousStaff = () => {
        if (staff > 0) setStaff(staff - 1);
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            if (typeof reader.result === 'string') setLogoSrc(reader.result);
        };
        reader.readAsDataURL(file);
        setLogoFile(file);
    };

    const handleUpload = async () => {
        if (!logoFile) return;
        const formData = new FormData();
        formData.append("logo", logoFile);
        try {
            const res = await fetch("http://localhost/managerEsportsBack/uploadLogo.php", {
            method: "POST",
            body: formData
            });
            const data = await res.json();
            if (data.status === "success") toast.success("Logo subido: " + data.path);
            else toast.error("Error: " + data.message);
        } catch {
            toast.error("Fallo en la petición");
        }
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
                <AddButton onClick={handleUpload}>+</AddButton>
            </UpControls>
            <FormContainer>
                <Form>
                    <Title>Jugadores</Title>
                    <Content>
                        <FormHeader>
                            <Current>Jugador {currentPlayer + 1}</Current>
                            <ControlButtons>
                                <Button type="add" onClick={addPlayer}><MdPersonAdd size={15} /></Button>
                                <Button type="remove" onClick={removePlayer}><MdPersonRemove size={15} /></Button>
                                <Button type="navigate" onClick={previousPlayer}><MdNavigateBefore size={15} /></Button>
                                <Button type="navigate" onClick={nextPlayer}><MdNavigateNext size={15} /></Button>
                            </ControlButtons>
                        </FormHeader>
                        <PlayerForm
                            form={playerForms[currentPlayer]}
                            setForm={updated => {
                                setPlayerForms(forms =>
                                    forms.map((f, i) => i === currentPlayer ? updated : f)
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
                            <Current>{staffList[staff]}</Current>
                            <ControlButtons>
                                <Button type="navigate" onClick={previousStaff}><MdNavigateBefore size={15} /></Button>
                                <Button type="navigate" onClick={nextStaff}><MdNavigateNext size={15} /></Button>
                            </ControlButtons>
                        </FormHeader>
                        <StaffForm
                            form={staffForms[staff]}
                            setForm={updated => {
                                setStaffForms(forms =>
                                    forms.map((f, i) => i === staff ? updated : f)
                                );
                            }}
                        />
                    </Content>
                </Form>

                <Form>
                    <Title>Equipo</Title>
                    <Content>
                        <FormHeader>
                            <Current>Información del equipo</Current>
                        </FormHeader>
                        <div>
                            <Label htmlFor="teamName">Nombre del equipo</Label>
                            <Input id="teamName" name="teamName" />
                            <Label htmlFor="navColor">Color del navegador</Label>
                            <Select id="navColor" selectColor={navColor} value={navColor} onChange={handleColorChange}>
                                <option value="#B71C1C">Rojo Oscuro</option>
                                <option value="#C62828">Rojo</option>
                                <option value="#E53935">Rojo Brillante</option>
                                <option value="#FFCDD2">Rosa Suave</option>
                                <option value="#E65100">Naranja Oscuro</option>
                                <option value="#F57C00">Naranja</option>
                                <option value="#FF9800">Naranja Claro</option>
                                <option value="#FFE0B2">Durazno</option>
                                <option value="#F9A825">Ámbar</option>
                                <option value="#FBC02D">Amarillo</option>
                                <option value="#FFEB3B">Amarillo Claro</option>
                                <option value="#FFF9C4">Maíz pálido</option>
                                <option value="#1B5E20">Verde Oscuro</option>
                                <option value="#2E7D32">Verde Bosque</option>
                                <option value="#4CAF50">Verde</option>
                                <option value="#A5D6A7">Verde Suave</option>
                                <option value="#004D40">Teal Oscuro</option>
                                <option value="#00796B">Teal</option>
                                <option value="#009688">Teal Claro</option>
                                <option value="#B2DFDB">Menta</option>
                                <option value="#0D47A1">Azul Marino</option>
                                <option value="#1976D2">Azul</option>
                                <option value="#2196F3">Azul Brillante</option>
                                <option value="#BBDEFB">Azul Cielo</option>
                                <option value="#311B92">Índigo Oscuro</option>
                                <option value="#5E35B1">Índigo</option>
                                <option value="#7E57C2">Morado Medio</option>
                                <option value="#E1BEE7">Lavanda</option>
                                <option value="#424242">Gris Oscuro</option>
                                <option value="#757575">Gris</option>
                                <option value="#BDBDBD">Gris Claro</option>
                                <option value="#212121">Negro</option>
                                <option value="#FFFFFF">Blanco</option>
                                <option value="#3E2723">Marrón Oscuro</option>
                                <option value="#6D4C41">Marrón</option>
                                <option value="#A1887F">Topo</option>
                            </Select>
                            <Label htmlFor="twitch">Twitch <FaTwitch size={15} color="#9146FF" /></Label>
                            <Input id="twitch" name="twitch" />
                            <Label htmlFor="youtube">Youtube <FaYoutube size={15} color="#FF0000" /></Label>
                            <Input id="youtube" name="youtube" />
                            <Label htmlFor="twitter">Twitter <FaTwitter size={15} color="#1DA1F2" /></Label>
                            <Input id="twitter" name="twitter" />
                            <Label htmlFor="instagram">Instagram <FaInstagram size={15} color="#C1358" /></Label>
                            <Input id="instagram" name="instagram" />
                        </div>
                    </Content>
                </Form>
            </FormContainer>
        </Background>
    );
};