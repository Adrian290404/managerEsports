import { Input, Label, Player } from "../styles/teamFormStyles";

export interface PlayerData {
    playerName: string;
    playerNickname: string;
    playerEpicname: string;
    playerEpicID: string;
    playerSteamID: string;
    playerDiscordID: string;
    playerPeak: string;
}

interface PlayerFormProps {
    form: PlayerData;
    setForm: (newForm: PlayerData) => void;
}

export const PlayerForm: React.FC<PlayerFormProps> = ({ form, setForm }) => {
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <Player>
            <Label htmlFor="playerName">Nombre</Label>
            <Input id="playerName" name="playerName" value={form.playerName} onChange={change} />

            <Label htmlFor="playerNickname">Nickname</Label>
            <Input id="playerNickname" name="playerNickname" value={form.playerNickname} onChange={change} />

            <Label htmlFor="playerEpicname">Nombre Epic</Label>
            <Input id="playerEpicname" name="playerEpicname" value={form.playerEpicname} onChange={change} />

            <Label htmlFor="playerEpicID">Epic ID</Label>
            <Input id="playerEpicID" name="playerEpicID" value={form.playerEpicID} onChange={change} />

            <Label htmlFor="playerSteamID">Steam ID</Label>
            <Input id="playerSteamID" name="playerSteamID" value={form.playerSteamID} onChange={change} />

            <Label htmlFor="playerDiscordID">Discord ID</Label>
            <Input id="playerDiscordID" name="playerDiscordID" value={form.playerDiscordID} onChange={change} />

            <Label htmlFor="playerPeak">Peak</Label>
            <Input id="playerPeak" name="playerPeak" type="number" value={form.playerPeak} onChange={change} />
        </Player>
    );
};