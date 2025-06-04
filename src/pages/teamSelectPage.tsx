import React from "react";
import { TeamCard } from "../components/teamSelectPage/teamCard";
import { Background, Title, AddButton } from "../styles/teamSelectStyles";
import { Link } from "react-router-dom";

export const TeamSelectPage: React.FC = () => {

    return <Background>
        <Title>Aún no hay equipos registrados</Title>
        <Link to="/weather">
            <AddButton>+</AddButton>
        </Link>
    </Background>
};