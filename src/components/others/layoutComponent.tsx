import { useEffect, useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Background, LeftIcon, Logo, Menu, MenuItem } from "../../styles/layoutStyles";
import def from '../../assets/default.png';
import { Outlet, useNavigate } from "react-router-dom";

export const LayoutComponent: React.FC = () => {

    const navigate = useNavigate();
    const [color, setColor] = useState<string>("#000000");
    const [image, setImage] = useState<string>("");

    useEffect(() => {
        const selectedTeamId = sessionStorage.getItem("selectedTeamId");

        if (!selectedTeamId) {
            navigate("/select-team");
            return;
        }

        fetch("http://localhost/managerEsportsBack/getTeamInformation.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: selectedTeamId })
            })
            .then((res) => {
                if (!res.ok) throw new Error("Error fetching team data");
                return res.json();
            })
            .then((data) => {
                setColor(data.color || "#000000");
                setImage(data.image || "");
                
            })
            .catch((err) => {
                console.error(err);
            });

        }, [navigate]);

    return <>
        <Background palette={color}>
            <Logo src={image != "" ? image : def} />
            <Menu>
                <MenuItem>Contactos scrims</MenuItem>
                <MenuItem>Entrenamientos</MenuItem>
                <MenuItem>Torneos</MenuItem>
            </Menu>
            <LeftIcon>
                <RiLogoutCircleLine />
            </LeftIcon>
        </Background>

        <Outlet />
    </>
}