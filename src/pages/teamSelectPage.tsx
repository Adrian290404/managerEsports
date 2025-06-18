import React, { useEffect, useState } from "react";
import { Background, Title, AddButton, CardContainer } from "../styles/teamSelectStyles";
import { Link } from "react-router-dom";
import { TeamCard } from "../components/others/teamCard";
import vortex from "../assets/vortex.png"
import vitality from "../assets/vitality.png"

// interface TestItem {
//   id: number;
//   texto: string;
//   numero: number;
// }

export const TeamSelectPage: React.FC = () => {

    // const [data, setData] = useState<TestItem[]>([]);

    // useEffect(() => {
    //     fetch('http://localhost/managerEsportsBack/getTestData.php')
    //         .then(response => response.json())
    //         .then(result => setData(result))
    //         .catch(error => console.error("Error al obtener datos:", error));
    // }, []);

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
        {/* <h2>Datos de la tabla test</h2>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Texto</th>
                <th>Numero</th>
            </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.texto}</td>
                    <td>{item.numero}</td>
                    </tr>
                ))}
            </tbody>
        </table> */}
    </Background>
};