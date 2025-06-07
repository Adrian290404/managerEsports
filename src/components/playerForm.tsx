import { Input, Label } from "../styles/teamFormStyles"

interface player{
    player: number;
}

export const PlayerForm: React.FC<player> = ({ player }) => {
    return <>
        <Label htmlFor={"nombre"+player}>Nombre</Label>
        <Input id={"nombre"+player} type="text" />
        <Label htmlFor={"nickname"+player}>Nickname</Label>
        <Input id={"nickname"+player} type="text" />
        <Label htmlFor={"epicgame"+player}>Nombre epic</Label>
        <Input id={"epicgame"+player} type="text" />
        <Label htmlFor={"epicID"+player}>Epic ID</Label>
        <Input id={"epicID"+player} type="text" />
        <Label htmlFor={"steamID"+player}>Steam ID</Label>
        <Input id={"steamID"+player} type="text" />
        <Label htmlFor={"discordID"+player}>Discord ID</Label>
        <Input id={"discordID"+player} type="text" />
        <Label htmlFor={"peak"+player}>Peak</Label>
        <Input id={"peak"+player} type="number" />
    </>
}