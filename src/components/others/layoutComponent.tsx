import { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import { Background, LeftIcon, Logo, Menu, MenuItem } from "../../styles/layoutStyles";
import def from '../../assets/default.png';
import { Outlet } from "react-router-dom";

export const LayoutComponent: React.FC = () => {
    const [color, setColor] = useState("#000000");
    const [image, setImage] = useState("");

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