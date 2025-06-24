import React, { useEffect, useState } from "react";
import { Background, Title, AddButton, CardContainer } from "../styles/teamSelectStyles";
import { Link } from "react-router-dom";
import { TeamCard } from "../components/others/teamCard";

export const TeamSelectPage: React.FC = () => {
    const [teams, setTeams] = useState<any[]>([]);

    useEffect(() => {
        const seeder = localStorage.getItem("seeder");

        if (seeder !== "true") {
            fetch("http://localhost/managerEsportsBack/seeder.php")
                .then((response) => response.json())
                .catch((error) => console.error("Error al obtener datos:", error));

            localStorage.setItem("seeder", "true");
        }

        fetch("http://localhost/managerEsportsBack/getTeams.php")
            .then((res) => res.json())
            .then((data) => setTeams(data))
            .catch((err) => console.error("Error al cargar equipos:", err));
    }, []);

    return (
        <Background>
            <Title>{teams.length !== 0 ? "Selecciona un equipo" : "Aún no hay equipos registrados"}</Title>
            {
                teams.length !== 0 && (
                    <CardContainer>
                        {teams.map(team => (
                            <TeamCard
                                key={team.name}
                                id={team.id}
                                image={team.image}
                            />
                        ))}
                    </CardContainer>
                )
            }
            <Link to="/team-form">
                <AddButton>+</AddButton>
            </Link>
        </Background>
    );
};
