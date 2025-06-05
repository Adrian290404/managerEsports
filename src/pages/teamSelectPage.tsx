import React from "react";
import { Background, Title, AddButton } from "../styles/teamSelectStyles";
import { Link } from "react-router-dom";

export const TeamSelectPage: React.FC = () => {

    return <Background>
        <Title>Aún no hay equipos registrados</Title>
        <Link to="/team-form">
            <AddButton>+</AddButton>
        </Link>
    </Background>
};