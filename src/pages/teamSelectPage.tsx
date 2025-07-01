import React, { useEffect, useState } from "react";
import { Background, Title, AddButton, CardContainer } from "../styles/teamSelectStyles";
import { Link, useNavigate } from "react-router-dom";
import { TeamCard } from "../components/others/teamCard";

export const TeamSelectPage: React.FC = () => {
    const [teams, setTeams] = useState<any[]>([]);
    const navigate = useNavigate();

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

    const handleSelect = (teamId: number | string) => {
        sessionStorage.setItem("selectedTeamId", String(teamId));
        navigate("/team");
    };

    return (
        <Background>
            <Title>
                {teams.length !== 0
                    ? "Selecciona un equipo"
                    : "Aún no hay equipos registrados"
                }
            </Title>

            {teams.length !== 0 && (
                <CardContainer>
                    {teams.map((team) => (
                        <TeamCard
                            key={team.id}
                            id={team.id}
                            image={team.image}
                            onClick={() => handleSelect(team.id)}
                        />
                    ))}
                </CardContainer>
            )}

            <Link to="/team-form">
                <AddButton>+</AddButton>
            </Link>
        </Background>
    );
};