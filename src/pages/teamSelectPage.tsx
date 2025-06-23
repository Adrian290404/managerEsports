import React, { useEffect } from "react";
import { Background, Title, AddButton, CardContainer } from "../styles/teamSelectStyles";
import { Link } from "react-router-dom";
import { TeamCard } from "../components/others/teamCard";
import vortex from "../assets/vortex.png"
import vitality from "../assets/vitality.png"

export const TeamSelectPage: React.FC = () => {

    useEffect(() => {

        const seeder = localStorage.getItem("seeder");

        if (seeder !== "true") {
            fetch("http://localhost/managerEsportsBack/seeder.php")
                .then((response) => response.json())
                .catch((error) => console.error("Error al obtener datos:", error));

            localStorage.setItem("seeder", "true");
        }

    }, []);

    const teams = []

    return <Background>
        <Title>{teams.length != 0 ? "Selecciona un equipo" : "Aún no hay equipos registrados"}</Title>
        {
            teams.length != 0 && (<CardContainer>
                    {/* <TeamCard image={vortex} id={1}></TeamCard>
                    <TeamCard image={vitality} id={2}></TeamCard> */}
                </CardContainer>
            )
        }
        <Link to="/team-form">
            <AddButton>+</AddButton>
        </Link>
    </Background>
};