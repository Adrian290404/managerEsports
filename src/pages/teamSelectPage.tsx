import React from "react";
import { Background, Title, AddButton, CardContainer } from "../styles/teamSelectStyles";
import { Link } from "react-router-dom";
import { TeamCard } from "../components/others/teamCard";
import vortex from "../assets/vortex.png"
import vitality from "../assets/vitality.png"

export const TeamSelectPage: React.FC = () => {

    const teams = ["vortex", "vitality"];

    return <Background>
        <Title>{teams.length != 0 ? "Selecciona un equipo" : "Aún no hay equipos registrados"}</Title>
        {
            teams.length != 0 && (<CardContainer>
                    <TeamCard image={vortex} id={1}></TeamCard>
                    <TeamCard image={vitality} id={2}></TeamCard>
                </CardContainer>
            )
        }
        <Link to="/team-form">
            <AddButton>+</AddButton>
        </Link>
    </Background>
};